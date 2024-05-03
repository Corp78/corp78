"use client"

import React from "react";
import classnames from 'classnames';
import classes from "./Buttton.module.css";

interface BaseButtonProps {
    className?: string;
    text?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    iconClassName?: string;
    type?: 'button' | 'submit' | 'reset';
    full?: boolean;
    line?: boolean;
    white?: boolean;
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type GenericButtonProps = ButtonProps;

export const Button = (props: BaseButtonProps & GenericButtonProps) => {
    const {
        color,
        className,
        onClick,
        type,
        iconClassName,
        full,
        line,
        white ,
        ...rest
    } = props;


    return (
        <button
            className={classnames(
                classes.blockColor,
                {
                    [classes.full]: props.full,
                    [classes.line]: props.line,
                    [classes.white]: props.white
                },
                className,
            )}
            onClick={() =>  alert("Nous sommes impatients de vous accueillir, mais les réservations seront disponibles ultérieurement. Merci de votre patience.")}
            onSubmit={onClick}
            type={type}
            {...rest}
        >
            {props.children}
            {props.text && props.text}
        </button>
    );
};
