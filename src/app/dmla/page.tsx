import classes_2 from "./page.module.css";
import classes from "@/app/admin/dashboard/addArticle/page.module.css";
import ReactMarkdown from "react-markdown";
import React from "react";
import {Footer, Header, Page} from "@/app/libs/core";
import type {Metadata} from "next";
import remarkGfm from 'remark-gfm';
import {Contact} from "@/app/Contact";


const article =
    `
# La Dégénérescence Maculaire Liée à l'Âge (DMLA)

### Introduction
La dégénérescence maculaire liée à l'âge (DMLA) est une maladie affectant la macula, essentielle pour une vision centrale nette. Elle survient principalement chez les personnes de plus de 65 ans et constitue l'une des principales causes de handicap visuel en France. Les mécanismes exacts de cette pathologie sont encore mal compris.

### Définition et Signification
L'acronyme DMLA désigne la "Dégénérescence Maculaire Liée à l'Âge". La macula est la zone centrale de la rétine où se concentrent les cellules visuelles appelées cônes. La DMLA entraîne une dégradation de cette zone, impactant gravement la vision.
![alt text](/dmla_maculaire.png)

## Facteurs de Risque

- **Hérédité** : Principal facteur de risque connu. Un dépistage régulier est recommandé pour ceux ayant des antécédents familiaux.
- **Nutrition** : Une alimentation riche en acides gras oméga-3 et en lutéine peut avoir un effet protecteur.
- **Tabac** : Considéré comme un facteur de risque majeur.
- **Rayons UV** : Leur rôle est débattu, mais le port de lunettes de protection peut ralentir le vieillissement rétinien.

### Stades de la DMLA

1. **Maculopathie Liée à l'Âge (MLA)** : Stade précoce sans symptômes visibles, détectable par un ophtalmologiste, présence de drusens.
2. **DMLA Atrophique (DMLA Sèche)** : Caractérisée par une atrophie des cellules rétiniennes, entraînant une baisse de la vision centrale avec apparition de scotomes.
3. **DMLA Exsudative (DMLA Humide)** : Marquée par la formation de néovaisseaux anormaux sous la rétine, provoquant des déformations visuelles et une perte de vision rapide.

### Comparaison entre DMLA sèche et DMLA humide

|                    | **DMLA sèche**                     | **DMLA humide**                    |
|--------------------|--------------------------------|--------------------------------|
| **Autres noms**    | Atrophique                     | Exsudative ou néovasculaire    |
| **Clinique**       | Perte d’épaisseur de la macula | Gonflement œdémateux de la macula |
| **Évolution**      | Lentement progressive          | Par poussées                   |
| **Vision**         | Scotome (tache sombre)         | Métamorphopsies (vision ondulée) |
| **Traitement**     | Surveillance et compléments alimentaires | Injections intravitréennes d’anti-VEGF |

![alt text](/dmla_humide.png)

### Prise en Charge

- **Auto-surveillance** : Utilisation de la grille d'Amsler pour détecter les métamorphopsies et les scotomes.
- **Injections intra-vitréennes d'anti-VEGF** : Traitement principal pour la DMLA humide, visant à freiner la progression de la maladie.
  - [Injection intra-vitréenne](https://www.sfo-online.fr/sites/www.sfo-online.fr/files/medias/documents/65_Injection_intravitreenne_7sept14.pdf)
  - Disparition du liquide sous-rétinien après IVT
  
![alt text](/liquid_dmla.png)

### Prévalence
La DMLA est la première cause de malvoyance chez les plus de 50 ans dans les pays industrialisés, avec une prévalence augmentant avec l'âge.

### Diagnostic

- **Symptômes** : Baisse progressive ou brutale de l'acuité visuelle, métamorphopsies, scotome central.
- **Examen clinique** : Comprend la mesure de l'acuité visuelle, l'examen du fond d'œil, la tomographie en cohérence optique (OCT).

### Traitement

1. **Forme Débutante** : Supplémentation en vitamines et antioxydants pour ralentir l'évolution.
2. **Forme Atrophique** : Actuellement, aucun traitement curatif, mais des essais sont en cours.
3. **Forme Exsudative** : Injections d'anti-VEGF.

## Conclusion
La DMLA est une maladie chronique nécessitant une surveillance et des traitements réguliers. Les avancées thérapeutiques et les stratégies de gestion évoluent rapidement, offrant de nouvelles perspectives pour les patients atteints. Une prise en charge précoce et une bonne hygiène de vie sont essentielles pour ralentir la progression de cette pathologie.
    `

export const metadata: Metadata = {
    title: "Dégénérescence Maculaire Liée à l'Âge (DMLA) - Cabinet Ophtalmologique Pariwest",
    description: "Découvrez la Dégénérescence Maculaire Liée à l'Âge (DMLA), une maladie affectant la macula et entraînant une perte de vision centrale. Informez-vous sur les facteurs de risque, les stades de la maladie, les traitements disponibles et les perspectives thérapeutiques.",
    keywords: "DMLA, dégénérescence maculaire liée à l'âge, macula, vision centrale, ophtalmologie, santé oculaire, maladies oculaires, ophtalmo",
    applicationName: "Cabinet Ophtalmologique Pariwest",
    authors: [{name: "canonical", url: "https://ophtalmologie-maurepas.fr/cataracte"}],
    generator: "Next.js",
    creator: "Cabinet Ophtalmologique Pariwest",
    publisher: "GitHub",
};

const DmlaPage = () => {


    return (
        <Page>
            <Header/>
            <div className={classes_2.container_view_block}>
                <div className={classes.container_view}>
                    <div className={classes.container_view}>
                        <ReactMarkdown
                            className={classes.markdown} remarkPlugins={[remarkGfm]}>
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

export default DmlaPage;