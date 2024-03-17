import React from 'react';
import classes from "./Acceuil.module.css";
import {DoctorCard} from "@/app/libs/core";

interface LinkDropDown {
    title: string;
    href: string;
}


export const Acceuil = () => {


    return (
        <div className={classes.container} id="home">
            <div className={classes.titleContainer}>
                <h1 className={classes.title}>Cabinet Ophtalmologique Rétine Paupière 78</h1>
            </div>
            <div className={classes.doctorCardsContainer}>
                <DoctorCard name="Docteur Quentin Hays"
                            description="Spécialisé en rétine cataracte, chirurgie réfractive"
                            image ="/Quentin.png" left/>
                <DoctorCard name="Docteur Karen Bitton-Chappe"
                            description="Spécialisé en paupière, contract, glaucome, chirurgie réfractive"
                            image="/Karen.jpg" right/>
            </div>

        </div>

    );
};
