import React from 'react';
import classes from "./ListPoint.module.css";

interface Props {
    text: string
}

export const ListPoint = ({text}: Props) => {

    return (
        <div className={classes.container} >
            <div className={classes.point}></div>
            <p className={classes.text}>{text}</p>
        </div>
    );
};


