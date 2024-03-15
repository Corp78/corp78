import React from 'react';
import classes from "./DoctorCard.module.css";
import Image from 'next/image'
import classnames from "classnames";

interface Props {
    name: string;
    description: string;
    left?: boolean;
    right?: boolean;
}


export const DoctorCard = ({name, description, left, right}: Props) => {

    return (
        <div className={classnames(classes.container, {
            [classes.left]: !!left,
            [classes.right]: !!right,
        })}>
            <div className={classes.imageContainer}>
                <Image className={classes.image} src="/Quentin.png" alt="quentin" fill sizes="(max-width: 768px) , (max-width: 1200px)"/>
            </div>
            <h5 className={classes.name}>{name}</h5>
            <p className={classes.description}>{description}</p>
        </div>

    );
};
