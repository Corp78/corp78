import classes from "./page.module.css";
import {Footer, Header, Page} from "@/app/libs/core";
import {Contact} from "@/app/Contact";
import {Metadata} from "next";
import {ContentCabinet} from "./ContentCabinet";
import {Equipe} from "./Equipe";
import {FirstContent} from "@/app/cabinet/FirstContent";

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
                <FirstContent/>
                <ContentCabinet/>
                <Equipe/>
            </div>
            <Contact/>
            <Footer/>
        </Page>
    );
};


export default CataractPage;