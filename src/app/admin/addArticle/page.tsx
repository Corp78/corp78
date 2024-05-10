"use client"

import React, {useRef, useState} from "react";
import classes from './page.module.css'
import ReactMarkdown from "react-markdown";
import {ButtonIcon} from "@/app/libs/core";
import {FaBold, FaListOl, FaListUl} from "react-icons/fa6";
import {FaExchangeAlt, FaItalic} from "react-icons/fa";
import {BsFillChatQuoteFill} from "react-icons/bs";
import {RiSeparator} from "react-icons/ri";
import NextImage from "next/image"
import {IoMdBook} from "react-icons/io";
import classnames from "classnames";
import {Formik} from "formik";

interface initialValues {
    title: string;
    image: string;
    article: string;
}

const Page = () => {

    const [article, setArticle] = useState("");

    const [editorBook, setEditorBook] = useState<boolean>(true);
    const [viewPage, setViewPage] = useState<boolean>(true)


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
            const resizedImageUrl = await resizeImage(file, 1900, 1900); // Resize to maximum width and height of 300px
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

    return (
        <Formik initialValues={{title: '', image: '', article: ''}} onSubmit={(values) => {
            console.log(values)
        }}>
            {({
                  values,
                  handleSubmit,
                  handleChange,
                  setFieldValue,
              }) => (
                <form className={classes.page} onSubmit={handleSubmit}>
                    <div className={classnames(classes.editor_content, {
                        [classes.editor_content_book]: editorBook,
                        [classes.editor_content_view]: !editorBook && viewPage,
                        [classes.editor_content_edit]: !editorBook && !viewPage,
                    })}>

                        <div className={classes.select}>
                            <input name="title" type="text" placeholder="Titre de l'article" onChange={handleChange}
                                   value={values.title}/>
                            <div className={classes.fileInput}>
                                <label htmlFor="file-upload" className={classes.fileUpload}>
                                    Choisir une image
                                </label>
                                <p>{imageUrl}</p>
                            </div>
                            <input id="file-upload" type="file"
                                   accept="image/*" // Limit to image files only
                                   onChange={async (e) => {
                                       const res = await handleImageChange(e)
                                       await setFieldValue('image', res);
                                   }}/>
                        </div>
                        <div className={classes.header}>
                            <ButtonIcon onClick={() => addTag("# ")}>
                                <p>T1</p>
                            </ButtonIcon>
                            <ButtonIcon onClick={() => addTag("## ")}>
                                <p>T2</p>
                            </ButtonIcon>
                            <ButtonIcon onClick={() => addTag("### ")}>
                                <p>T3</p>
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
                            <textarea ref={textareaRef} value={values.article} name="article"
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
                                    {`# ${values.title}\n` + values.article}
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