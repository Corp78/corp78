"use client"

import React from 'react';
import classes from "./Review.module.css";
import {ReviewCard} from "@/app/libs/core";
import {ButtonLink} from "@/app/libs/core/Button/ButtonLink";
import {Link, reviewComment} from "@/app/Data";
import {AnalyticsEventName} from "@/app/libs/data/Analytics";


export const Review = () => {


    return (
        <div className={classes.container} id="review">
            <div className={classes.backgroundCircle1}/>
            <div className={classes.backgroundCircle2}/>
            <div className={classes.content}>
                <h2 className={classes.title}>Avis Clients</h2>
            </div>
            <div className={classes.reviewContainer}>
                <div className={classes.reviewContent}>
                    {reviewComment.map((comment, index) => (
                        <ReviewCard
                            key={index}
                            name={comment.name}
                            date={comment.date}
                            description={comment.description}
                            provenance={comment.provenance}
                        />
                    ))
                    }
                </div>

            </div>
            <div className={classes.buttonContainer}>
                <ButtonLink text="Ajouter un avis"
                            href={Link.googleReview}
                            eventAnalytics={AnalyticsEventName.click_google_review}
                />
            </div>
        </div>

    );
};