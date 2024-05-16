"use client"

import React, {useEffect, useRef, useState} from "react";
import classes from './page.module.css'
import ReactMarkdown from "react-markdown";
import {ButtonIcon, Loading} from "@/app/libs/core";
import {FaBold, FaListOl, FaListUl} from "react-icons/fa6";
import {FaExchangeAlt, FaItalic, FaSave} from "react-icons/fa";
import {BsFillChatQuoteFill} from "react-icons/bs";
import {RiSeparator} from "react-icons/ri";
import NextImage from "next/image"
import {IoMdBook} from "react-icons/io";
import classnames from "classnames";
import {Formik} from "formik";
import {getDownloadURL, getStorage, ref, uploadString} from "@firebase/storage";
import firebase_app from "@/app/firebase";
import {useRequireAuth} from "@/app/libs/hooks/useRequireAuth";
import {addDoc, collection, getFirestore} from "@firebase/firestore";
import {v4 as uuidv4} from 'uuid';
import {MdDelete, MdPushPin} from "react-icons/md";
import {useRouter, useSearchParams} from "next/navigation";
import * as Yup from 'yup';
import {deepEqual, deleteArticleById, getArticleById} from "@/app/libs/utils/utilsFunction";
import {IoClose} from "react-icons/io5";

interface Values {
    title: string | null;
    image: string | null;
    article: string | null;
    pin: boolean;
    date: Date | null;
}


const valuesSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    image: Yup.string().required('Image is required'),
    article: Yup.string().required('Article content is required'),
    pin: Yup.boolean().required('Pin status is required'),
    date: Yup.date().nullable().required('Date is required'),
});


const Page = () => {


    const {loading} = useRequireAuth()
    const [editorBook, setEditorBook] = useState<boolean>(true);
    const [viewPage, setViewPage] = useState<boolean>(true)

    const router = useRouter()
    const searchParams = useSearchParams()

    const id = searchParams.get('id')


    const resizeImage = (file: File, maxWidth: number, maxHeight: number): Promise<string | null> => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;

                    if (width > height) {
                        if (width > maxWidth) {
                            height *= maxWidth / width;
                            width = maxWidth;
                        }
                    } else {
                        if (height > maxHeight) {
                            width *= maxHeight / height;
                            height = maxHeight;
                        }
                    }

                    canvas.width = width;
                    canvas.height = height;

                    const ctx = canvas.getContext('2d');
                    if (ctx) {
                        ctx.drawImage(img, 0, 0, width, height);
                        resolve(canvas.toDataURL('image/jpeg'));
                    } else {
                        resolve(null);
                    }
                };
                img.src = event.target?.result as string;
            };
            reader.readAsDataURL(file);
        });
    };

    const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target?.files[0];
        setImageUrl(file ? file.name : '')
        if (file) {
            const resizedImageUrl = await resizeImage(file, 1200, 1200); // Resize to maximum width and height of 300px
            return resizedImageUrl ? resizedImageUrl : ''
        }
        return ''
    };

    const textareaRef = useRef<HTMLTextAreaElement>(null);


    const [imageUrl, setImageUrl] = useState<string>('');

    const addTag = (tag: string, moveCursorToEnd: boolean = true, positionAdjustment: number = 0) => {
        if (textareaRef.current) {
            const currentCursorPosition = textareaRef.current.selectionStart;
            const currentValue = textareaRef.current.value;

            // Find the end position of the current line
            let endOfLinePosition = currentCursorPosition;
            while (endOfLinePosition < currentValue.length && currentValue[endOfLinePosition] !== '\n') {
                endOfLinePosition++;
            }

            // Insert the tag at the end of the line or at the current cursor position
            let newValue;
            let newCursorPosition;
            if (moveCursorToEnd) {
                newValue =
                    currentValue.substring(0, endOfLinePosition) +
                    '\n' + tag +
                    currentValue.substring(endOfLinePosition);
                newCursorPosition = endOfLinePosition + tag.length + 1; // +1 to account for the newline character
            } else {
                newValue =
                    currentValue.substring(0, currentCursorPosition) +
                    tag +
                    currentValue.substring(currentCursorPosition);
                newCursorPosition = currentCursorPosition + tag.length;
            }

            // Update textarea value and cursor position
            textareaRef.current.value = newValue;
            textareaRef.current.setSelectionRange(newCursorPosition, newCursorPosition + positionAdjustment);
            textareaRef.current.focus();
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && textareaRef.current) {
            const currentValue = textareaRef.current.value;
            const currentCursorPosition = textareaRef.current.selectionStart;

            // Get the text of the current line
            let startOfLine = currentCursorPosition - 1;
            while (startOfLine >= 0 && currentValue[startOfLine] !== '\n') {
                startOfLine--;
            }
            startOfLine++;

            const currentLine = currentValue.substring(startOfLine, currentCursorPosition);

            // Check if the previous line starts and ends with "- "
            if (currentLine.startsWith('- ') && currentLine.endsWith('- ') && startOfLine > 0) {
                // Remove the previous line
                const newValue =
                    currentValue.substring(0, startOfLine - 1) + "\n\n"
                currentValue.substring(currentCursorPosition);

                // Update textarea value and cursor position
                textareaRef.current.value = newValue;
                textareaRef.current.setSelectionRange(startOfLine + 1, startOfLine + 1); // Move cursor to the start of the next line
                event.preventDefault(); // Prevent default behavior of Enter key
            } else if (currentLine.startsWith('- ') && !currentLine.endsWith('- ')) {
                // Insert "- " at the beginning of the next line
                // Update textarea value and cursor position
                textareaRef.current.value =
                    currentValue.substring(0, currentCursorPosition) +
                    '\n- ' +
                    currentValue.substring(currentCursorPosition);
                textareaRef.current.setSelectionRange(currentCursorPosition + 3, currentCursorPosition + 3); // Move cursor to the right
                event.preventDefault(); // Prevent default behavior of Enter key
            } else if (/^[0-9]+\.\s/.test(currentLine)) {
                // Remove the previous line
                const currentNumberMatch = /^[0-9]+/.exec(currentLine);
                let nextLineValue = '';
                let nextLineNumber;
                if (/^[0-9]+\.\s*$/.test(currentLine)) {
                    const newValue =
                        currentValue.substring(0, startOfLine - 1) + "\n\n"
                    currentValue.substring(currentCursorPosition);

                    // Update textarea value and cursor position
                    textareaRef.current.value = newValue;
                    textareaRef.current.setSelectionRange(startOfLine + 1, startOfLine + 1); // Move cursor to the start of the next line
                    event.preventDefault(); // Prevent default behavior of Enter key
                } else {
                    if (currentNumberMatch) {
                        const currentNumber = parseInt(currentNumberMatch[0], 10);
                        nextLineNumber = currentNumber + 1;
                        nextLineValue = nextLineNumber + '. ';
                    }
                    textareaRef.current.value =
                        currentValue.substring(0, currentCursorPosition) + '\n' +
                        nextLineValue +
                        currentValue.substring(currentCursorPosition);
                    textareaRef.current.setSelectionRange(currentCursorPosition + nextLineValue.length + 1, currentCursorPosition + nextLineValue.length + 1); // Move cursor to the right
                    event.preventDefault(); // Prevent default behavior of Enter key
                }
            }
        }
    };


    const uploadFile = async (base64String: string): Promise<string | null> => {
        try {
            // Check if the user is authenticated
            const storage = getStorage(firebase_app);

            // Extract base64 string without data URL prefix
            const base64Data = base64String.split(',')[1];

            // Upload file to Firebase Storage
            const storageRef = ref(storage, uuidv4());
            await uploadString(storageRef, base64Data, 'base64');

            // Get download URL of the uploaded file
            const downloadURL = await getDownloadURL(storageRef);
            console.log('File uploaded to:', downloadURL);
            return downloadURL;
        } catch (error) {
            console.error('Error uploading file:', error);
            return null;
        }
    };

    const handleSubmit = async (values: Values) => {
        try {
            const db = getFirestore(firebase_app);
            const collectionRef = collection(db, 'articles');
            const imageUrl = await uploadFile(values.image || '');
            if (!imageUrl) {
                return;
            }
            const data = {
                title: values.title,
                imageUrl,
                article: values.article,
                pin: true,
            };
            await addDoc(collectionRef, data);
            router.push("/admin/dashboard")

            console.log('Data added to collection successfully.');
        } catch (error) {
            console.error('Error adding data to collection:', error);
        }
    }

    const [initialValues, setInitialValues] = useState<Values | null>(null);
    const [articleIsSet, setArticleIsSet] = useState(false)

    const getInitialValues = async () => {
        const def: Values = {
            title: null,
            image: null,
            article: null,
            pin: true,
            date: new Date()
        }
        if (!id) {
            return def;
        }
        const article = await getArticleById(id)
        if (!article) return def;
        setArticleIsSet(true)
        return {
            title: article.title,
            image: article.imageUrl,
            article: article.article,
            pin: article.pin,
            date: article.date,
        }
    }

    useEffect(() => {
        (async () => {
            const inti = await getInitialValues()
            setInitialValues(inti)
        })()
    }, []);


    if (loading || !initialValues) {
        return <Loading addDiv/>
    }


    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={valuesSchema}>
            {({
                  values,
                  handleSubmit,
                  handleChange,
                  setFieldValue,
                  errors,
                  touched
              }) => (
                <form className={classes.page} onSubmit={handleSubmit}>
                    <div className={classnames(classes.editor_content, {
                        [classes.editor_content_book]: editorBook,
                        [classes.editor_content_view]: !editorBook && viewPage,
                        [classes.editor_content_edit]: !editorBook && !viewPage,
                    })}>
                        <div className={classes.save}>

                            <ButtonIcon indicator={values.pin} onClick={async () => {
                                await setFieldValue("pin", !values.pin)
                            }}>
                                <MdPushPin className={classes.icon}/>
                            </ButtonIcon>


                            <ButtonIcon type="submit" change={deepEqual(initialValues, values)}>
                                <FaSave className={classes.icon}/>
                            </ButtonIcon>

                            {articleIsSet && id &&
                                <ButtonIcon del onClick={async () => {
                                    await deleteArticleById(id, initialValues?.image);
                                    router.push('/admin/dashboard')
                                }}>
                                    <MdDelete className={classes.icon}/>
                                </ButtonIcon>
                            }

                            <ButtonIcon onClick={() => {
                                router.push("/admin/dashboard");
                            }}>
                                <IoClose className={classes.icon}/>
                            </ButtonIcon>


                        </div>

                        <div className={classes.select}>
                            <input name="title" type="text" placeholder="Titre de l'article" onChange={handleChange}
                                   value={values.title || ''}/>
                            {touched.title && errors.title && <p className={classes.error}>{errors.title}</p>}
                            <div className={classes.fileInput}>
                                <label htmlFor="file-upload" className={classes.fileUpload}>
                                    Choisir une image
                                </label>
                                <p className={classes.imageText}>{imageUrl || values.image}</p>
                            </div>
                            {touched.image && errors.image && <p className={classes.error}>{errors.image}</p>}
                            <input id="file-upload" type="file"
                                   accept="image/*" // Limit to image files only
                                   onChange={async (e) => {
                                       const res = await handleImageChange(e)
                                       await setFieldValue('image', res);
                                   }}/>
                        </div>
                        <div className={classes.header}>
                            <ButtonIcon onClick={() => addTag("# ")}>
                                <p className={classes.icon}>T1</p>
                            </ButtonIcon>
                            <ButtonIcon onClick={() => addTag("## ")}>
                                <p className={classes.icon}>T2</p>
                            </ButtonIcon>
                            <ButtonIcon onClick={() => addTag("### ")}>
                                <p className={classes.icon}>T3</p>
                            </ButtonIcon>
                            <ButtonIcon onClick={() => addTag("- ")}>
                                <FaListUl className={classes.icon}/>
                            </ButtonIcon>
                            <ButtonIcon onClick={() => addTag("1. ")}>
                                <FaListOl className={classes.icon}/>
                            </ButtonIcon>
                            <ButtonIcon>
                                <FaBold className={classes.icon} onClick={() => addTag(" ****", false, -2)}/>
                            </ButtonIcon>
                            <ButtonIcon>
                                <FaItalic className={classes.icon} onClick={() => addTag(" **", false, -1)}/>
                            </ButtonIcon>
                            <ButtonIcon>
                                <BsFillChatQuoteFill className={classes.icon} onClick={() => addTag("\> ")}/>
                            </ButtonIcon>
                            <ButtonIcon>
                                <RiSeparator className={classes.icon} onClick={() => addTag("\n___\n\n")}/>
                            </ButtonIcon>
                            <div className={classes.separator}/>
                            <ButtonIcon onClick={() => {
                                setEditorBook(!editorBook);
                            }}>
                                <IoMdBook className={classes.icon}/>
                            </ButtonIcon>
                            {!editorBook &&
                                <ButtonIcon onClick={() => {
                                    setViewPage(!viewPage);
                                }}>
                                    <FaExchangeAlt className={classes.icon}/>
                                </ButtonIcon>
                            }
                        </div>
                        <div className={classes.container_editable}>
                            {touched.article && errors.article && <p className={classes.error}>{errors.article}</p>}
                            <textarea ref={textareaRef}
                                      value={(values.article || '')}
                                      name="article"
                                      className={classes.textarea}
                                      onChange={handleChange}
                                      onKeyDown={handleKeyDown}
                            />
                        </div>
                        <div className={classes.container_view_block}>
                            <div className={classes.container_view}>
                                {
                                    values.image && <div className={classes.imageContainer}>
                                        <NextImage src={values.image} alt="image article" objectFit="cover" fill/>
                                    </div>
                                }
                                <ReactMarkdown
                                    className={classes.markdown}>
                                    {`# ${values.title || ''}\n` + (values.article || '')}
                                </ReactMarkdown>
                            </div>
                        </div>

                    </div>
                </form>
            )}
        </Formik>
    );
};

export default Page;