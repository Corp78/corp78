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
                            specialities={["chirurgie rétine / vitréo-maculaire", "chirurgie de la cataracte", "chirurgie réfractive"]}
                            image ="/Quentin.png" left/>
                <DoctorCard name="Docteur Karen Bitton-Chappe"
                            specialities={["chirurgie des paupières", "chirurgie glaucome", "chirurgie de la cataracte", "chirurgie réfractive"]}
                            image="/Karen.jpg" right/>
            </div>

        </div>

    );
};
