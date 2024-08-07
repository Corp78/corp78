import React from 'react';
import classes from "./Expertise.module.css";
import {ExpertiseCard} from "@/app/libs/core";


export const Expertise = () => {


    return (
        <div className={classes.container} id="expertise">
            <div className={classes.content}>
                <h2>Nos Expertises</h2>
            </div>
            <div className={classes.expertiseContainer}>
                <div className={classes.expertiseContent}>
                    <ExpertiseCard title="Chirurgie Réfractive"
                                   description="Spécialité de la chirurgie ophtalmologique qui vise à corriger les défauts visuels comme la myopie, l'hypermétropie, l'astigmatisme et la presbytie."
                                   image="/Refractive.svg" href="/refractive"/>
                    <ExpertiseCard title="Chirurgie Cataracte"
                                   description="Une opacification du cristallin, lentille naturelle de l’œil, qui entraîne une baisse de la vision. La chirurgie de la cataracte consiste à retirer le cristallin opacifié pour le remplacer par un implant."
                                   image="/cataracte.svg"
                                   href="/cataracte"/>
                    <ExpertiseCard title="Chirurgie Rétine"
                                   description="Prise en charge du trou maculaire, des membranes rétiniennes, du décollement de la rétine en urgence, de la myopie forte."
                                   image="/retine.svg"/>
                    <ExpertiseCard title="Chirurgie Paupière"
                                   description="Les paupières sont des annexes de l’œil. Elles ont un rôle à la fois fonctionnel et esthétique. Elles protègent le globe oculaire des agressions externes, participent à l’hydratation de la cornée et limitent la pénétration de la lumière dans l’œil."
                                   image="/Paupiere.svg"
                                   href="eyelid"/>
                    <ExpertiseCard title="Glaucome"
                                   description="Première cause de cécité en France, le glaucome est une neuropathie optique dégénérative entraînant un rétrécissement concentrique du champ visuel avec, au stade ultime, une baisse de la vision centrale."
                                   image="/glaucome.svg"
                                   href="/glaucome"/>
                    <ExpertiseCard title="DMLA"
                                   description="La dégénérescence maculaire liée à l'âge (DMLA) est une maladie affectant la macula, essentielle pour une vision centrale nette."
                                   image={"/dmla.svg"}
                                   href="/dmla"/>
                </div>
            </div>

        </div>

    );
};
