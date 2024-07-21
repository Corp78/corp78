import classes from "./page.module.css";
import {Footer, Header, Page} from "@/app/libs/core";
import {Contact} from "@/app/Contact";
import Image from "next/image";
import {Metadata} from "next";
import {ContentCabinet} from "./ContentCabinet";
import {Equipe} from "./Equipe";

const contentInfo = [
    {
        title: "Petite Chirurgie",
        content: [
            "Incisions de chalazions",
            "Injections intravitréennes"
        ]
    },
    {
        title: "Matériel Diagnostic",
        content: [
            "OCT",
            "Topographie",
            "Champ visuel",
            "Biométrie"
        ]
    },
    {
        title: "Matériel Thérapeutique",
        content: [
            "Laser Argon",
            "YAG",
            "SLT",
            "Salle de petite chirurgie"
        ]
    }
]

const article_part1 =
    `
# Nos Services

## Consultations

- **Consultations classiques** : Renouvellement de lunettes, ajustement de lentilles de contact.
- **Consultations préopératoires** : Réfractive, cataracte, rétine, glaucome, paupières.
- **Suivi spécialisé** : Glaucome, rétine, DMLA.

    `

const article_part2 =
    `
## Urgences Oculaires

En cas d’urgence oculaire, nous sommes là pour vous, aux heures d'ouverture, pour traiter rapidement toute affection comme l’œil rouge, douloureux ou une baisse de vision brutale.

## Notre Engagement

Au Cabinet Ophtalmologique Pariwest, votre santé visuelle est notre priorité absolue. Nous nous engageons à vous fournir des soins de la plus haute qualité, alliant expertise, équipement de pointe et approche personnalisée. 

Prenez rendez-vous dès aujourd'hui pour préserver la santé de vos yeux et de votre vision.

--- 

## Notre Équipe

Notre équipe médicale spécialisée, dirigée par les Dr Hays et Bitton-Chappe, vous assure une prise en charge experte de la cataracte, de la cornée, des maladies rétiniennes et de la paupière. Nos chirurgiens sont également praticiens à l'Hôpital Nation des Quinze-Vingt, leader en chirurgie ophtalmologique (1er au classement Le Point).


    `

export const metadata: Metadata = {
    title: "Le Cabinet Ophtalmologique Pariwest",
    description: "Découvrez le Cabinet Ophtalmologique Pariwest, votre espace dédié à la santé visuelle au cœur des Yvelines. Niché dans le tout nouvel Espace Santé Pariwest à Maurepas, notre cabinet est équipé des technologies les plus avancées pour répondre à toutes vos attentes en matière de santé oculaire.",
    keywords: "cabinet ophtalmologique, ophtalmologie, santé visuelle, santé oculaire, chirurgie ophtalmologique, chirurgie réfractive, chirurgie cataracte, chirurgie rétine, chirurgie paupière, glaucome, DMLA, cabinet ophtalmologique Pariwest, Espace Santé Pariwest, Maurepas, Yvelines, ophtalmo",
    applicationName: "Cabinet Ophtalmologique Pariwest",
    authors: [{name: "canonical", url: "https://ophtalmologie-maurepas.fr/cabinet"}],
    generator: "Next.js",
    creator: "Cabinet Ophtalmologique Pariwest",
    publisher: "GitHub",
};

const CataractPage = () => {


    return (
        <Page>
            <Header/>
            <div className={classes.container_view_block}>
                <div className={classes.imageMainContainer}>
                    <div className={classes.imageContainer}>
                        <Image src="/Cabinet.png" alt="cataract" fill/>
                    </div>
                    <div className={classes.introContainer}>
                        <p className={classes.introTitle}>Découvrez le <strong>Cabinet Ophtalmologique Pariwest</strong>,
                            votre
                            espace dédié à la santé visuelle au
                            cœur des Yvelines. Niché dans le tout nouvel <strong>Espace Santé Pariwest</strong> à
                            Maurepas, notre
                            cabinet est équipé des technologies les plus avancées pour répondre à toutes vos
                            attentes en matière de santé oculaire.</p>
                    </div>
                </div>
                <ContentCabinet/>
                <Equipe/>
            </div>
            <Contact/>
            <Footer/>
        </Page>
    );
};


export default CataractPage;