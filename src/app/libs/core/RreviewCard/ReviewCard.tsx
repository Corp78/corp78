import React from 'react';
import classes from "./ReviewCard.module.css";
import {LiaStarSolid} from "react-icons/lia";


interface Props {
    name: string;
    date: string;
    description: string;
    provenance: string;
}

export const ReviewCard = ({name, description, date, provenance}: Props) => {


    return (
        <div className={classes.container}>
            <div className={classes.startsContainer}>
                {[0, 1, 2, 3, 4].map((e) => (
                    <LiaStarSolid key={e} className={classes.star}/>
                ))}
            </div>
            <div className={classes.titleContainer}>
                <h4 className={classes.title}>{name}</h4>
                <p className={classes.date}>{date}</p>
            </div>
            <p className={classes.description}>{description}</p>
            <p className={classes.provenance}>{`${provenance}`}</p>
        </div>

    );
};
