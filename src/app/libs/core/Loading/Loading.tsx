import classes from "./Loading.module.css";
import Image from "next/image";
import React from "react";
import classnames from "classnames";

export const Loading = () => {


    return (
        <div className={classes.container}>
            <Image className={classnames(classes.image, classes.container)} src={"/contour_eye.svg"} alt="contour"
                   fill/>
            <Image className={classnames(classes.image, classes.iris)} src={"iris.svg"} alt="eye" fill/>
        </div>
    );
};

