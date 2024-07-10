"use client"

import React, {useEffect, useState} from 'react';
import classes from "./Acceuil.module.css";
import {DoctorCard} from "@/app/libs/core";
import {addLogAnalytics} from "@/app/libs/utils/utilsFunction";
import {AnalyticsEventName} from "@/app/libs/data/Analytics";


export const Acceuil = () => {
    const [random, setRandom] = useState(0); // Initialize random state

    useEffect(() => {
        setRandom(Math.round(Math.random())); // Update random state on component mount
        addLogAnalytics(AnalyticsEventName.home_page);
    }, []); // Run only once on component mount


    const doctorsInfo = {
        quentin: {
            name: "Docteur Quentin Hays",
            specialities: ["chirurgie rétine / vitréo-maculaire", "chirurgie de la cataracte", "chirurgie réfractive"],
            image: "/Quentin.jpg",
        },
        karen: {
            name: "Docteur Karen Bitton-Chappe",
            specialities: ["chirurgie des paupières", "chirurgie glaucome", "chirurgie de la cataracte", "chirurgie réfractive"],
            image: "/Karen.jpg",
        }
    }

    const doctor1 = random === 0 ? doctorsInfo.quentin : doctorsInfo.karen;
    const doctor2 = random === 0 ? doctorsInfo.karen : doctorsInfo.quentin;

    return (
        <div className={classes.container} id="home">
            <div className={classes.titleContainer}>
                <h1 className={classes.title}>Cabinet Ophtalmologique Pariwest</h1>
                <h2 className={classes.open}>Ouverture début juillet 1</h2>
            </div>
            <div className={classes.doctorCardsContainer}>
                <DoctorCard name={doctor1.name} specialities={doctor1.specialities} image={doctor1.image} left/>
                <DoctorCard name={doctor2.name} specialities={doctor2.specialities} image={doctor2.image} right/>
            </div>
        </div>
    );
};
