import React from 'react';
import classes from "./DoctorCard.module.css";
import Image from 'next/image'
import classnames from "classnames";
import {ListPoint} from "@/app/libs/core";

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
                <Image className={classes.image} src={image} alt="doctor" fill/>
            </div>
            <h5 className={classes.name}>{name}</h5>
            <div className={classes.specialistDescription}>
                <p className={classnames(classes.description, classes.specialist)}>Spécialiste en :</p>
                {specialities.map(speciality => (
                    <ListPoint key={speciality} text={speciality}/>
                ))}
            </div>


        </div>

    );
};
