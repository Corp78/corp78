"use client"

import React from 'react';
import classes from "./SimpleBoxContent.module.css";
import classnames from "classnames";
import {IoIosAlarm} from "react-icons/io";

interface Props {
    title: string;
    content?: string;
    children?: React.ReactNode;
    id?: string;
    white?: boolean;
    transparent?: boolean;
    light?: boolean;
    time?: string;
    icon?: React.ReactNode;
    blueLight?: boolean;
}

export const SimpleBoxContent = ({
                                     title,
                                     content,
                                     children,
                                     id,
                                     white,
                                     time,
                                     light,
                                     icon,
                                     transparent,
                                     blueLight
                                 }: Props) => {


    return (
        <div key={id} className={classnames(classes.container, {
            [classes.white]: white,
            [classes.light]: light,
            [classes.transparent]: transparent,
            [classes.blueLight]: blueLight
        })}>
            <div className={classes.titleContainer}>
                <h4>{title}</h4>
                {time &&
                    <div className={classes.timeContainer}>
                        <IoIosAlarm className={classes.icon}/>
                        <p className={classes.time}>{time}</p>
                    </div>
                }
                {icon && icon}
            </div>
            {content && <p dangerouslySetInnerHTML={{__html: content}}></p>}
            {children}
        </div>

    );
};
