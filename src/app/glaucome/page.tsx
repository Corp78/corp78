"use client"

import classes_2 from "@/app/actu/ActuPage/ArticlePage.module.css";
import classes from "@/app/admin/dashboard/addArticle/page.module.css";
import ReactMarkdown from "react-markdown";
import React from "react";
import {Header, Page} from "@/app/libs/core";
import Head from "next/head";

const article =
    `
# Le Glaucome

Première cause de cécité en France, le glaucome est une neuropathie optique dégénérative entraînant un rétrécissement concentrique du champ visuel avec, au stade ultime, une baisse de la vision centrale. Tout l’enjeu de cette pathologie réside dans le dépistage et la prise en charge à un stade précoce.

## Facteurs de Risque

Le principal facteur de risque est l’hypertonie oculaire (augmentation de la pression intra-oculaire) et le seul facteur modifiable.

## Types de Glaucome

Il existe différents types de glaucome, dont le plus fréquent est le glaucome chronique primitif à angle ouvert. D'autres formes incluent :
- Glaucome à angle fermé
- Glaucome à pression normale
- Glaucome secondaire à d’autres pathologies oculaires
- Glaucome lié à la prise de traitements (corticoïdes)

## Dépistage

Le glaucome est une pathologie asymptomatique, d’où l’importance d’un dépistage précoce qui repose sur un examen clinique complet, comprenant :
- Prise de la tension intra-oculaire
- Mesure de l’épaisseur cornéenne
- Examen de l’angle irido-cornéen par gonioscopie
- Examen de la tête du nerf optique au fond d’œil

### Examens Complémentaires

- Rétinophotographies
- Tomographie en Cohérence Optique (OCT) du nerf optique et des cellules ganglionnaires maculaires
- Examen du champ visuel (mesure subjective de la fonction visuelle)

Ces examens sont réalisés à intervalle régulier en fonction de la gravité de l’atteinte et permettent d’apprécier l’évolution de la maladie.

## Traitements

Le principal traitement du glaucome repose sur l’abaissement de la tension intra-oculaire. Il n’existe pas de traitement curatif mais l’objectif est de ralentir l’évolution et stabiliser la maladie.

### Options Thérapeutiques

- **Gouttes hypotonisantes** : Traitement de première intention
- **Traitements physiques par lasers** :
  - Iridotomie périphérique en cas d’angle fermé
  - Trabéculoplastie sélective pour les angles ouverts
- **Traitements chirurgicaux** :
  - Chirurgie filtrante (sclérectomie profonde non perforante et trabéculectomie)
  - Dispositifs mini-invasifs en plein essor

    `

const EyeLidPage = () => {


    return (
        <Page>
            <Head>
                <title>Glaucome: Causes, Symptômes, et Traitements - Ophtalmologie Maurepas</title>
                <meta name="description"
                      content="Le glaucome est une cause majeure de cécité. Découvrez les facteurs de risque, les symptômes, les types de glaucome, et les options de traitement disponibles."/>
                <meta name="keywords"
                      content="glaucome, cécité, hypertonie oculaire, traitement du glaucome, santé oculaire, ophtalmologie, dépistage du glaucome"/>
                <link rel="canonical" href="https://ophtalmologie-maurepas.fr/glaucome"/>
                <meta property="og:title"
                      content="Glaucome: Causes, Symptômes, et Traitements - Ophtalmologie Maurepas"/>
                <meta property="og:description"
                      content="Informez-vous sur le glaucome, ses causes, symptômes, et les traitements pour prévenir la cécité. Consultez notre guide complet sur le glaucome."/>
                <meta property="og:url" content="https://ophtalmologie-maurepas.fr/glaucome"/>
                <meta property="og:type" content="article"/>
                <meta property="twitter:title"
                      content="Glaucome: Causes, Symptômes, et Traitements - Ophtalmologie Maurepas"/>
                <meta property="twitter:description"
                      content="Le glaucome est une cause majeure de cécité. Découvrez comment le dépister, ses symptômes, et les traitements disponibles."/>
            </Head>
            <Header/>
            <div className={classes_2.container_view_block}>
                <div className={classes.container_view}>
                    <ReactMarkdown
                        className={classes.markdown}>
                        {article}
                    </ReactMarkdown>
                </div>
            </div>
        </Page>
    );
};


export default EyeLidPage;