import classes_2 from "./page.module.css";
import classes from "@/app/admin/dashboard/addArticle/page.module.css";
import ReactMarkdown from "react-markdown";
import React from "react";
import {Footer, Header, Page} from "@/app/libs/core";
import type {Metadata} from "next";
import {Contact} from "@/app/Contact";
import Image from "next/image";


const article =
    `
# La Cataracte

La cataracte est définie par l'opacification de tout ou partie du cristallin. Il s'agit d'une pathologie très fréquente, avec environ 700 000 opérations par an en France, ce qui en fait la chirurgie la plus pratiquée en France. L'incidence de cette pathologie augmente avec l'âge, en raison du vieillissement de la population.

## Circonstances de découverte et signes fonctionnels

Les signes fonctionnels de la cataracte incluent :

- **Baisse d'acuité visuelle** : progressive, affectant principalement la vision de loin, avec une vision de près souvent mieux conservée, sauf en cas de cataracte sous-capsulaire postérieure.
- **Photophobie** : halos colorés autour des lumières, gêne à la conduite nocturne.
- **Diplopie monoculaire** : vision double d'un œil, qui persiste à l'occlusion de l'autre œil.
- **Modification de la perception des couleurs** : jaunissement, souvent remarqué après la chirurgie de l'autre œil.

---

## L’examen clinique repose sur :

#### L’Interrogatoire

Il inclut des questions sur :

- Âge et profession.
- Antécédents ophtalmologiques et généraux, en particulier diabète et prise de corticoïdes.
- Symptômes oculaires associés (myodésopsies, métamorphopsies).

#### La Mesure de l'acuité visuelle

Elle quantifie la gêne :

- Œil par œil et en binoculaire.
- De loin et de près (échelles de Monoyer et Parinaud).
- Avec la correction optique adaptée.

#### Un Examen à la lampe à fente

Réalisé avant et après dilatation pupillaire, il décrit le cristallin et élimine d'autres pathologies associées.

---

## Les causes et différents types de cataractes

- **Cataracte liée à l'âge** : La plus fréquente, souvent bilatérale et symétrique.
- **Cataractes traumatiques**
- **Cataractes secondaires à des maladies ophtalmologiques** : diabète, uvéites chroniques, myopie forte, rétinopathies pigmentaires, antécédents de chirurgie oculaire.
- **Cataractes secondaires iatrogènes** : usage prolongé de corticoïdes, radiothérapie orbitaire.
- **Cataractes secondaires à des maladies génétiques** : Dystrophie myotonique de Steinert, trisomie 21.
- **Cataractes congénitales**

## Le traitement

Le traitement est exclusivement chirurgical. La chirurgie de la cataracte est réalisée en ambulatoire, principalement sous anesthésie locale. La chirurgie est envisagée en cas de gêne fonctionnelle, de gêne à l’examen du fond d’œil ou en prévention des complications induites par la cataracte.

Le choix de l'implant permet de corriger les troubles réfractifs du patient :

- **Les implants sphériques monofocaux** corrigent uniquement les amétropies sphériques (myopie ou hypermétropie).
- **Les implants toriques monofocaux** permettent de corriger en même temps les amétropies sphériques (myopie et hypermétropie) et l'astigmatisme. Ils ont une composante cylindrique et sont donc orientés. Il faut les positionner selon un certain axe lorsqu'on les met en place dans l'œil.
- Avec les implants monofocaux, le patient perd la faculté d'accommoder et devra porter des lunettes en vision de près ou progressives en postopératoire.
- **Les implants multifocaux** sont conçus pour corriger plusieurs distances de vision (loin, intermédiaire, près). Ils peuvent être toriques. Leur principe repose sur la séparation de la lumière réfractée par l’implant vers 3 (trifocaux) foyers. Les implants multifocaux peuvent entraîner toutefois des effets secondaires photiques à type de halos.
- L'implant ne se dégrade pas. Vous le garderez donc toute votre vie, quel que soit votre âge au moment de l'intervention.

---

>Les chirurgiens du Cabinet Ophtalmologiques Pariwest sont des experts en traitement de la cataracte. Tout est mis en œuvre pour que la procédure soit rapide, indolore et sécurisée. La gestion efficace de ces aspects permet de restaurer une vision optimale et d'améliorer la qualité de vie des patients atteints de cataracte.

    `

export const metadata: Metadata = {
    title: "La Cataracte - Ophtalmologie Maurepas",
    description: "Informez-vous sur la cataracte : symptômes, diagnostics, et traitements chirurgicaux. Découvrez comment la chirurgie de la cataracte peut restaurer une vision optimale et améliorer la qualité de vie.",
    keywords: "cataracte, symptômes cataracte, traitement cataracte, chirurgie cataracte, santé oculaire, maladies oculaires, ophtalmologie, implants oculaires, correction de la vision",
    applicationName: "Cabinet Ophtalmologique Pariwest",
    authors: [{name: "canonical", url: "https://ophtalmologie-maurepas.fr/cataracte"}],
    generator: "Next.js",
    creator: "Cabinet Ophtalmologique Pariwest",
    publisher: "GitHub",
};

const CataractPage = () => {


    return (
        <Page>
            <Header/>
            <div className={classes_2.container_view_block}>
                <div className={classes.container_view}>
                    <div className={classes.imageContainer}>
                        <Image src="/cataract.png" alt="eyelid" fill
                               style={{filter: 'blur(2px) sepia(0.7) '}}/>
                    </div>
                    <div className={classes.container_view}>
                        <ReactMarkdown
                            className={classes.markdown}>
                            {article}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
            <Contact/>
            <Footer/>
        </Page>
    );
};


export default CataractPage;