import React from 'react';
import classes from "./DoctorCard.module.css";
import Image from 'next/image'
import classnames from "classnames";

interface Props {
    name: string;
    image: string;
    left?: boolean;
    right?: boolean;
    specialities: string[]
}



export const DoctorCard = ({name, specialities, image, left, right}: Props) => {

    return (
        <div className={classnames(classes.container, {
            [classes.left]: !!left,
            [classes.right]: !!right,
        })}>
            <div className={classes.imageContainer}>
                <Image className={classes.image} src={image} alt="quentin" fill sizes="(max-width: 768px) , (max-width: 1200px)"/>
            </div>
            <h5 className={classes.name}>{name}</h5>
            <div className={classes.specialistDescription}>
                <p className={classnames(classes.description, classes.specialist)}>Spécialiste en :</p>
                {specialities.map(speciality => (
                    <li key={speciality} className={classes.description}>{speciality}</li>
                ))}
            </div>


        </div>

    );
};
