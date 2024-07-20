"use client"

import classes from "./page.module.css";
import classesMarkdown from "@/app/admin/dashboard/addArticle/page.module.css";
import React, {ReactNode, useMemo} from "react";
import ReactMarkdown from "react-markdown";
import classnames from "classnames";
import {SimpleBoxContent} from "../core/SimpleBoxContent/SimpleBoxContent";
import {Link} from "@/app/Data";
import {AnalyticsEventName} from "@/app/libs/data/Analytics";
import {ButtonLink} from "@/app/libs/core/Button/ButtonLink";


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

&nbsp;  

Prenez rendez-vous dès aujourd'hui pour préserver la santé de vos yeux et de votre vision.



    `

const article_part3 =
    `
&nbsp;  

--- 

&nbsp;

# Notre Équipe

Notre équipe médicale spécialisée, dirigée par les Dr Hays et Bitton-Chappe, vous assure une prise en charge experte de la cataracte, de la cornée, des maladies rétiniennes et de la paupière. Nos chirurgiens sont également praticiens à l'Hôpital Nation des Quinze-Vingt, leader en chirurgie ophtalmologique (1er au classement Le Point).

    `

export const ContentCabinet = () => {

    const contentListAdditional = useMemo(() => {
        const res: ReactNode[] = []
        Object.values(contentInfo).forEach((item, index) => {
            const Element = <SimpleBoxContent id={`additional${index}`} title={item.title} blueLight>
                {Array.isArray(item.content) ? item.content.map((goal, index) => (
                    <li key={index} dangerouslySetInnerHTML={{__html: goal}}/>
                )) : <p>{item.content}</p>}</SimpleBoxContent>

            res.push(Element)
        })
        return res;
    }, [])

    return (
        <div className={classnames(classes.contentText)}>
            <ReactMarkdown
                className={classesMarkdown.markdown}>
                {article_part1}
            </ReactMarkdown>
            <div className={classes.listContainer}>
                {contentListAdditional.map((item) => (
                    item
                ))}
            </div>
            <ReactMarkdown
                className={classesMarkdown.markdown}>
                {article_part2}
            </ReactMarkdown>
            <div style={{width: 'fit-content', margin: '0 auto', paddingTop: 24}}>
                <ButtonLink text="Prendre rendez-vous"
                            href={Link.doctolib}
                            eventAnalytics={AnalyticsEventName.click_meeting}
                />
            </div>
            <ReactMarkdown
                className={classesMarkdown.markdown}>
                {article_part3}
            </ReactMarkdown>
        </div>
    );
};