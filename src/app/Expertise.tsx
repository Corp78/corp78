import React from 'react';
import classes from "./Expertise.module.css";
import {ExpertiseCard} from "@/app/libs/core";


export const Expertise = () => {


    return (
        <div className={classes.container} id="expertise">
            <div className={classes.content}>
                <h2>Notre Expertises</h2>
            </div>
            <div className={classes.expertiseContainer}>
                <div className={classes.expertiseContent}>
                    <ExpertiseCard title="Chirurgie Réfractive"
                                   description="Correction de la MYOPIE, de l’ASTIGMATISME, de l’HYPERMETROPIE et de la PRESBYTIE par chirurgie Laser SMILE/LASIK/PKR ou chirurgie du cristallin avec implant Intra-oculaire."
                                   image="/Refractive.svg"/>
                    <ExpertiseCard title="Chirurgie Cataracte"
                                   description="Microchirurgie du cristallin devenu opaque, avec ultrason, et correction des troubles visuels associés."
                                   image="/cataracte.svg"/>
                    <ExpertiseCard title="Chirurgie Rétine"
                                   description="Prise en charge du trou maculaire, des membranes rétiniennes, du décollement de la rétine en urgence, de la myopie forte."
                                   image="/retine.svg"/>
                    <ExpertiseCard title="Chirurgie Paupiere"
                                   description="Chirurgie fonctionnelle et esthétique de la paupière, médecine esthétique."
                                   image="/Paupiere.svg"/>
                    <ExpertiseCard title="Glaucome"
                                   description="Suivi du glaucome avec analyse du champ visuel, et analyseur du nerf optique, traitement médical et chirurgical (laser SLT, chirurgie classique et non invasive)."
                                   image="/glaucome.svg"/>
                    <ExpertiseCard title="Lentilles"
                                   description="Adaptation en lentilles souples, rigides, orthokératologie et lentilles pour kératocône."
                                   image={"/Lentille.svg"}/>
                    <ExpertiseCard title="DMLA"
                                   description="Suivi de la macula avec analyseur optique de macula et injection intra-vitréenne."
                                   image={"/dmla.svg"}/>
                </div>
            </div>

        </div>

    );
};
