import classes_2 from "@/app/actu/ActuPage/ArticlePage.module.css";
import classes from "@/app/admin/dashboard/addArticle/page.module.css";
import ReactMarkdown from "react-markdown";
import React from "react";
import {Footer, Header, Page} from "@/app/libs/core";
import {Contact} from "@/app/Contact";
import type {Metadata} from "next";


const article =
    `
# Chirurgie Réfractive

La chirurgie réfractive est une spécialité de la chirurgie ophtalmologique qui vise à corriger les défauts visuels comme la myopie, l'hypermétropie, l'astigmatisme et la presbytie. Un bilan préopératoire complet vous sera proposé afin d’établir votre éligibilité et la technique opératoire la plus adaptée à votre cas.

#### Conditions minimales pour se faire opérer :
- Avoir plus de 20 ans
- Vision stable depuis plus d’un an

## Principales techniques de chirurgie réfractive


### LASIK (Laser-Assisted In Situ Keratomileusis)
![alt text](/lasik.png)
Le LASIK est devenu la technique de référence ces dernières années. Il consiste à créer un fin volet dans la cornée à l’aide d’un laser femtoseconde, à soulever ce volet et à remodeler la cornée sous-jacente à l'aide d'un laser excimer. Ses principaux avantages sont une récupération visuelle rapide combinée à de faibles douleurs post-opératoires.

### PRK (Photorefractive Keratectomy) et Trans-PRK
![alt text](/pkr.png)
Dans la PRK, la couche superficielle de la cornée est enlevée et un laser excimer est utilisé pour remodeler la cornée. Cette technique est l’option de choix pour les personnes ayant une cornée fine. La récupération visuelle se fait plus progressivement et un inconfort important est présent dans les 48h post-opératoires.

### SMILE (Small Incision Lenticule Extraction)
![alt text](/SMILE.png)
Le SMILE est la technique la plus récente. Une petite incision est faite dans la cornée et un lenticule intra stromal (une petite partie de la cornée) est retiré pour modifier la courbure de la cornée. C’est une technique mini-invasive, elle permet de prendre en charge les myopies modérées et l’astigmatisme.

### Implants Phakes
![alt text](/phakes.png)
Pour les personnes ayant des degrés (très) élevés de myopie, d’astigmatisme ou d'hypermétropie n’étant pas éligibles à la chirurgie réfractive cornéenne, des lentilles intraoculaires peuvent être proposées. Ces lentilles sont placées entre la cornée et le cristallin, offrant ainsi une correction visuelle permanente tout en préservant la capacité d'accommodation naturelle de l'œil.

### PRELEX (Presbyopic Lens Exchange)
![alt text](/prelex.jpg)
La PRELEX est une technique chirurgicale destinée à corriger la presbytie. La presbytie est une condition liée à l'âge qui se traduit par une diminution de la capacité de l'œil à voir de près. Cette technique consiste en l'échange du cristallin naturel par une lentille intraoculaire multifocale, offrant ainsi une vision claire à toutes les distances : de près, de loin et à distance intermédiaire. La lentille intraoculaire ne se dégrade pas avec le temps, offrant une correction permanente de la presbytie. En remplaçant le cristallin naturel, la PRELEX élimine également le risque de développer une cataracte.

## Contre-indications et Précautions
La chirurgie réfractive n'est pas adaptée à tout le monde. Les contre-indications incluent :
- Cornée trop fine
- Maladies oculaires (comme le kératocône)
- Grossesse en cours
- Maladies auto-immunes non contrôlées

La chirurgie réfractive offre des options variées pour améliorer la vision et réduire la dépendance aux lunettes ou aux lentilles de contact. Chaque technique présente des avantages et des inconvénients spécifiques, et le choix dépend de nombreux facteurs individuels. Parlez-en avec votre chirurgien !


    `

export const metadata: Metadata = {
    title: "Chirurgie Réfractive - Correction Visuelle Avancée - Ophtalmologie Maurepas",
    description: "La chirurgie réfractive offre des solutions avancées pour la correction de la myopie, l'hypermétropie, l'astigmatisme et la presbytie. Découvrez les techniques les plus modernes comme le LASIK, PRK, SMILE et les implants phakes.",
    keywords: "chirurgie réfractive, LASIK, PRK, SMILE, implants phakes, correction visuelle, myopie, hypermétropie, astigmatisme, presbytie, ophtalmo",
    applicationName: "Cabinet Ophtalmologique Pariwest",
    authors: [{name: "canonical", url: "https://ophtalmologie-maurepas.fr/refractive"}],
    generator: "Next.js",
    creator: "Cabinet Ophtalmologique Pariwest",
    publisher: "GitHub",
};

const RefractivePage = () => {
    return (

        <Page>
            <Header/>
            <div className={classes_2.container_view_block}>
                <div className={classes.container_view}>
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


export default RefractivePage;