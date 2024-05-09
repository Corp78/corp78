"use client"

import React from "react";
import classes from './ButtonIcon.module.css'

interface Props {
    children: React.ReactNode;
    onClick?: () => void;
}

export const ButtonIcon = ({children, onClick}: Props) => {

    return (
        <div className={classes.container} onClick={onClick}>
            {children}
        </div>
    );
};
