"use client"

import React from "react";
import classes from './ButtonIcon.module.css'
import classnames from "classnames";

interface Props {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "submit" | "button";
    indicator?: boolean;
    change?: boolean;
    del?: boolean
}

export const ButtonIcon = ({children, onClick, type = "button", indicator, change, del}: Props) => {

    return (
        <button type={type} className={classnames(classes.container, {
            [classes.pin]: indicator !== undefined && indicator,
            [classes.notPin]: indicator !== undefined && !indicator,
            [classes.change]: change,
            [classes.delete]: del,
        })} onClick={onClick}>
            {children}
        </button>
    );
};
