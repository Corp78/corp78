import React, {useMemo} from 'react';
import classes from "./Acceuil.module.css";
import {DoctorCard} from "@/app/libs/core";

interface LinkDropDown {
    title: string;
    href: string;
}


export const Acceuil = () => {

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

    const random = useMemo(() => {
        return Math.round(Math.random());
    }, [])


    return (
        <div className={classes.container} id="home">
            <div className={classes.titleContainer}>
                <h1 className={classes.title}>Cabinet Ophtalmologique Pariwest</h1>
                <h2 className={classes.open}>Ouverture début juillet</h2>
            </div>
            <div className={classes.doctorCardsContainer}>
                <DoctorCard name={random === 0 ? doctorsInfo.quentin.name : doctorsInfo.karen.name}
                            specialities={random === 0 ? doctorsInfo.quentin.specialities : doctorsInfo.karen.specialities}
                            image={random === 0 ? doctorsInfo.quentin.image : doctorsInfo.karen.image} left/>
                <DoctorCard name={random === 0 ? doctorsInfo.karen.name : doctorsInfo.quentin.name}
                            specialities={random === 0 ? doctorsInfo.karen.specialities : doctorsInfo.quentin.specialities}
                            image={random === 0 ? doctorsInfo.karen.image : doctorsInfo.quentin.image} right/>
            </div>

        </div>

    );
};
