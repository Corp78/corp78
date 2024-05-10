"use client"

import React, {useEffect, useRef, useState} from "react";
import classes from './page.module.css'
import ReactMarkdown from "react-markdown";
import {ButtonIcon} from "@/app/libs/core";
import {FaBold, FaListOl, FaListUl} from "react-icons/fa6";
import {FaItalic} from "react-icons/fa";
import {BsFillChatQuoteFill} from "react-icons/bs";
import {RiSeparator} from "react-icons/ri";

const Page = () => {

    const [article, setArticle] = useState("");

    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target?.files[0];
        if (file) {
            setSelectedImage(file);
            // You can perform additional tasks with the selected image here
        }
    };

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (!selectedImage) {
            return;
        }
        console.log(URL.createObjectURL(selectedImage))
    }, [selectedImage])

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
        <div className={classes.editor_content}>
            <div className={classes.select}>
                <input type="text"/>
                <input
                    type="file"
                    accept="image/*" // Limit to image files only
                    onChange={handleImageChange}
                />
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
            </div>
            <div className={classes.container_editable}>
                <textarea ref={textareaRef} value={article} className={classes.textarea}
                          onChange={(e) => setArticle(e.target.value)}
                          onKeyDown={handleKeyDown}/>
            </div>
            <div className={classes.container_view}>
                <ReactMarkdown
                    className={classes.markdown}>
                    {`![selectedImage](http://localhost:3000/2635aee3-869a-41b3-be68-80ee3d41cf09)\n`}
                    {article}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default Page;