import React from "react";
import classes from "./ActuCard.module.css";
import Image from 'next/image'

interface Props {
    title: string;
    image: string;
    date: string;
    description: string;
}

export const ActuCard = ({title, image, date, description}: Props) => {


    return (
        <div className={classes.container}>
            <div className={classes.imageContainer}>
                <Image src="/logo.svg" alt="image" fill/>
            </div>
            <div className={classes.date}>
                <p>{date}</p>
            </div>
            <div className={classes.title_container}>
                <div className={classes.title}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};
