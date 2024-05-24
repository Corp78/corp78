"use client"

import React, {useEffect, useState} from 'react';
import {useFormikContext} from 'formik';
import {AiOutlineEye} from 'react-icons/ai';
import classes from './Input.module.css'; // Import CSS module
import classnames from 'classnames';

interface InputProps {
    title: string;
    type?: string;
    name: string;
    value?: string;
    maxLength?: number;
    eye?: boolean;
    textarea?: boolean;
    className?: string;
    rows?: number;
    autoSize?: boolean;
    reset?: boolean;
}

const useAutosizeTextArea = (
    textAreaRef: HTMLTextAreaElement | null,
    value: string,
    textarea: boolean,
    disable: boolean,
) => {
    useEffect(() => {
        if (textAreaRef && textarea && !disable) {
            textAreaRef.style.height = '0px';
            const scrollHeight = textAreaRef.scrollHeight;
            textAreaRef.style.height = scrollHeight + 'px';
        }
    }, [textAreaRef, value, textarea, disable]);
};

export const Input: React.FC<InputProps> = ({
                                                title,
                                                type = 'text',
                                                name,
                                                value,
                                                maxLength = 100,
                                                eye,
                                                textarea,
                                                className,
                                                autoSize,
                                                reset,
                                                rows = autoSize ? 1 : 3,
                                            }) => {
    const formik = useFormikContext<any>();
    const [val, setVal] = useState(formik?.values[name] || value || '');
    const [inputType, setInputType] = useState<string>(type);
    const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
    useAutosizeTextArea(textAreaRef.current, val, !!textarea, !autoSize);

    useEffect(() => {
        if (reset) {
            setVal(formik.values[name] || value || '');
        }
    }, [reset]);

    const handleValue = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setVal(e.target.value);
        await formik.setFieldValue(name, e.target.value);
    };

    return (
        <div className={classes.container}>
            <div className={classes.inputContainer}>
                {textarea ? (
                    <div className={classes.textAreaContainer}>
                        <div className={classes.textAreaHolder}/>
                        <textarea
                            ref={textAreaRef}
                            rows={rows}
                            className={classnames(classes.textarea, className)}
                            name={name}
                            maxLength={maxLength}
                            value={val}
                            onChange={handleValue}
                        />
                    </div>
                ) : (
                    <input
                        className={classnames(classes.input, className)}
                        type={inputType}
                        name={name}
                        maxLength={maxLength}
                        value={val}
                        onChange={handleValue}
                    />
                )}
                <label
                    className={classnames(classes.label, {
                        [classes.hasValue]: val,
                    })}
                >
                    {title}
                </label>
                {eye && (
                    <div
                        className={classes.eyeContainer}
                        onClick={() => {
                            setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
                        }}
                    >
                        <AiOutlineEye className={classes.eye}/>
                    </div>
                )}
            </div>
            {formik?.touched[name] && formik?.errors[name] && (
                <div className={classes.error}>{formik.errors[name] as string}</div>
            )}
        </div>
    );
};

export default Input;