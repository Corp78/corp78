import React from 'react';
import classes from "./ExpertiseCard.module.css";
import Image from 'next/image'
import {Button} from "@/app/libs/core";


interface Props {
    title: string;
    description: string;
    image?: string;
}

export const ExpertiseCard = ({title, description, image = "/IoClose.svg"}: Props) => {


    return (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <div className={classes.imageContainer}>
                    <Image className={classes.image} src={image} alt="menu" width={48} height={48}/>
                </div>
                <h4 className={classes.title}>{title}</h4>
            </div>
            <p className={classes.description}>{description}</p>
            <div style={{flex:1}}></div>
            <Button text="En savoir plus ..." line/>
        </div>

    );
};
