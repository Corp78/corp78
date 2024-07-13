import React from 'react';
import classes from "./ExpertiseCard.module.css";
import Image from 'next/image'
import {Button} from "@/app/libs/core";
import {useRouter} from "next/navigation";


interface Props {
    title: string;
    description: string;
    image?: string;
    href?: string;
}

export const ExpertiseCard = ({title, description, image = "/IoClose.svg", href}: Props) => {

    const router = useRouter();

    return (
        <div className={classes.container} onClick={() => {
            if (href) {
                router.push(href);
            }
        }}>
            <div className={classes.titleContainer}>
                <div className={classes.imageContainer}>
                    <Image className={classes.image} src={image} alt="menu" width={48} height={48}/>
                </div>
                <h4 className={classes.title}>{title}</h4>
            </div>
            <p className={classes.description}>{description}</p>
            <div style={{flex: 1}}></div>
            <Button text="En savoir plus ..." line onClick={() => {
                if (href) {
                    router.push(href);
                }
            }}/>
        </div>

    );
};
