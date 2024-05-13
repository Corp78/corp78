import classes from "./Loading.module.css";
import Image from "next/image";
import React from "react";
import classnames from "classnames";

interface Props {
    addDiv?: boolean
}

export const Loading = ({addDiv}: Props) => {

    const load = (
        <div className={classes.container}>
            <Image className={classnames(classes.image, classes.container)} src={"/contour_eye.svg"} alt="contour"
                   fill/>
            <Image className={classnames(classes.image, classes.iris)} src={"/iris.svg"} alt="eye" fill/>
        </div>
    )

    if (addDiv) {
        return (
            <div className={classes.page}>
                {load}
            </div>
        )
    }

    return (
        <div>
            {load}
        </div>
    );
};

