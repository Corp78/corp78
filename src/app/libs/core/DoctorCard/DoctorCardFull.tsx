import React, {ReactNode} from 'react';
import classes from "./DoctorCard.module.css";
import Image from 'next/image'
import classnames from "classnames";

interface Props {
    name: string;
    image: string;
    content: ReactNode;
}


export const DoctorCardFull = ({name, image, content}: Props) => {

    return (
        <div className={classnames(classes.container, classes.fullContainer)}>
            <div className={classes.imageContainer}>
                <Image className={classes.image} src={image} alt="doctor" fill/>
            </div>
            {content}
        </div>

    );
};
