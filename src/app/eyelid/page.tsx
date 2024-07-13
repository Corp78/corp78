import classes_2 from "./page.module.css";
import classes from "@/app/admin/dashboard/addArticle/page.module.css";
import ReactMarkdown from "react-markdown";
import React from "react";
import {Footer, Header, Page} from "@/app/libs/core";
import type {Metadata} from "next";
import {Contact} from "@/app/Contact";
import Image from "next/image";

interface Props {
    id: string;
}

const article =
    `
# Pathologies des paupières et voies lacrymales

Les paupières sont des annexes de l’œil. Elles ont un rôle à la fois fonctionnel et esthétique. Elles protègent le globe oculaire des agressions externes, participent à l’hydratation de la cornée et limitent la pénétration de la lumière dans l’œil. Sur le plan esthétique, elles participent à l’expression et soulignent le regard.

Les voies lacrymales sont des canaux permettant le passage des larmes des yeux vers le nez.

---

## Pathologies des paupières

### Malpositions palpébrales

- **Ectropion :**
  - Correspond à une paupière éversée, tournée vers l’extérieur entraînant sécheresse oculaire par malocclusion palpébrale.
  - Il est le plus souvent involutionnel, lié à une hyperlaxité, peut être uni ou bilatéral.


- **Entropion :**
  - Correspond à une paupière tournée vers l’intérieur entraînant un frottement des cils sur la cornée (à l’origine de kératite, abcès, larmoiements…).
  - Il est le plus souvent lié à l’âge mais peut également être d’origine spasmodique.
  - Il peut être uni ou bilatéral, en paupière supérieure (le plus souvent d’origine cicatriciel : trachome, brûlure...) ou en paupière inférieure (lié au vieillissement des tissus).

---

### Ptosis
  - Il s’agit d’une pathologie uni ou bilatérale liée à une chute de la paupière supérieure pouvant entraîner une obstruction du champ visuel en plus d’une gêne esthétique.
  - Il peut être congénital ou acquis, d’origine musculaire ou nerveuse.
  - Le traitement est le plus souvent chirurgical avec différentes techniques en fonction de la force du muscle releveur de la paupière supérieure.

---

### Tumeurs des paupières

- **Tumeurs bénignes :**
  - Il existe de nombreuses tumeurs bénignes des paupières dont la plus fréquente est le chalazion correspondant à une inflammation des glandes de Meibomius, localisées à la base des cils et produisant la phase lipidique du film lacrymal.
  - Les autres tumeurs les plus courantes sont les naevus, papillomes, hydrocystomes, kystes sébacés.
  - Ces lésions peuvent être traitées chirurgicalement ou au laser sous anesthésie locale.

- **Tumeurs malignes :**
  - Il existe des tumeurs au niveau des paupières pouvant être d’origine malignes (cancéreuses) et avoir un envahissement local voire loco régional et à distance.
  - Il s’agit surtout des carcinomes basocellulaire et spinocellulaire.
  - Le traitement consiste à retirer la lésion en totalité, une analyse anatomopathologique pour connaître la nature et le pronostic de la tumeur.

---

## Esthétique des paupières

- **Blépharoplastie supérieure :**
  - Avec l’âge, il peut y avoir l’apparition d’un excès de peau au niveau des paupières supérieures devenant lourdes et tombantes.
  - Cette chirurgie se réalise au bloc opératoire, sous anesthésie locale potentialisée par une sédation, après réalisation de photos pré-opératoires et discussion en amont avec le patient du résultat escompté.
  - Des points de suture au niveau du pli palpébral sont laissés en place 1 semaine puis retirés en consultation.

- **Blépharoplastie inférieure :**
  - L’apparition de « poches graisseuses » au niveau des paupières inférieures peut donner un aspect fatigué au regard.
  - Pour corriger cet aspect, la blépharoplastie inférieure consiste en une résection de ces loges graisseuses et peut se réaliser par 2 voies d’abord en fonction de la présence d’un excès cutané ou non associé : 
    - La voie transconjonctivale (face profonde de la paupière inférieure sans cicatrice visible) 
    - La voie cutanée (incision très discrète au ras des cils).

- **Traitement des rides :**
  - Le rajeunissement du regard peut en outre faire appel à des injections de toxine botulique ou produits de comblement.
  - La toxine botulique corrige les rides musculaires d’expression notamment du tiers supérieur de la face : 
    - Les rides du front
    - Les rides de la glabelle (rides du lion)
    - Les rides du canthus latéral (rides de la patte d’oie).
  - Les injections se réalisent au cabinet dans une salle de soins dédiée avec des aiguilles très fines.
  - L’effet survient dans les quinze jours suivant l’injection.
  - Il est déconseillé de toucher le visage après l’injection pour ne pas faire diffuser le produit.
  - La durée d’efficacité de ces injections varie de 4-6 mois et les injections peuvent être renouvelées dans le temps.
  - Les produits de comblement tels que l’acide hyaluronique sont utilisés pour combler les volumes au niveau de la région péri-orbitaire (cerne creux).

---

## Pathologies des voies lacrymales

Le larmoiement est le principal motif de consultation en pathologies des voies lacrymales. Il peut être uni ou bilatéral, et invalidant au quotidien.

L’exploration du larmoiement se réalise en consultation au cabinet avec un examen à la lampe à fente et peut être complété par un sondage des voies lacrymales à la recherche d’une obstruction partielle ou complète sous anesthésie locale.

L’examen clinique peut être complété par un examen radiologique (dacryoscanner) pour situer plus précisément l’obstruction.

Le traitement varie en fonction de la cause du larmoiement et de la localisation de l’obstruction. Un traitement chirurgical sera préconisé en cas d’obstruction partielle ou complète des voies lacrymales. Il consiste soit en une reperméabilisation des voies lacrymales par sondage et mise en place d’une sonde en silicone laissée en place 2-3 mois puis retirée en consultation, soit en la réalisation d’une dacryocystorhinostomie (création d’un nouveau canal pour permettre aux larmes de s’écouler à nouveau dans le nez).

Chez l’enfant, une intervention chirurgicale est envisagée si le larmoiement persiste après 1 an.

    `

export const metadata: Metadata = {
    title: "Pathologies des Paupières et Voies Lacrymales - Ophtalmologie Maurepas",
    description: "Découvrez les pathologies des paupières et des voies lacrymales : symptômes, diagnostics, et traitements disponibles. Informez-vous sur les solutions adaptées pour chaque type de pathologie oculaire.",
    keywords: "pathologies des paupières, pathologies des voies lacrymales, symptômes des paupières, traitements des paupières, santé oculaire, maladies oculaires, ophtalmo",
    applicationName: "Cabinet Ophtalmologique Pariwest",
    authors: [{name: "canonical", url: "https://ophtalmologie-maurepas.fr/eyelid"}],
    generator: "Next.js",
    creator: "Cabinet Ophtalmologique Pariwest",
    publisher: "GitHub",
};

const EyeLidPage = () => {


    return (
        <Page>
            <Header/>
            <div className={classes_2.container_view_block}>
                <div className={classes.container_view}>
                    <div className={classes.imageContainer}>
                        <Image src="/eyelid.png" alt="eyelid" fill/>
                    </div>
                    <ReactMarkdown
                        className={classes.markdown}>
                        {article}
                    </ReactMarkdown>
                </div>
            </div>
            <Contact/>
            <Footer/>
        </Page>
    );
};


export default EyeLidPage;