import {ActuCard, Footer, Header} from "@/app/libs/core";
import classes from "./page.module.css";

export default function Actu() {
    return (
        <div className={classes.page_container}>
            <Header/>
            <div className={classes.container}>
                <h1>Actualités</h1>
                <div className={classes.actuContainer}>
                    <ActuCard image="dwa" title="Ophtalmologie Glaucome dwahd waiho hdwo dhwaio dhwaio ia"
                              date="12 / 12 / 2024"
                              description="je ne sais pas quoi dire mais je vais dire des trucs juste pour écrire des mots"/>
                    <ActuCard image="dwa" title="Ophtalmologie Glaucome" date="12 / 12 / 2024"
                              description="je ne sais pas quoi dire mais je vais dire des trucs juste pour écrire des mots"/>
                    <ActuCard image="dwa" title="Ophtalmologie Glaucome" date="12 / 12 / 2024"
                              description="je ne sais pas quoi dire mais je vais dire des trucs juste pour écrire des mots"/>
                    <ActuCard image="dwa" title="Ophtalmologie Glaucome" date="12 / 12 / 2024"
                              description="je ne sais pas quoi dire mais je vais dire des trucs juste pour écrire des mots"/>
                    <ActuCard image="dwa" title="Ophtalmologie Glaucome" date="12 / 12 / 2024"
                              description="je ne sais pas quoi dire mais je vais dire des trucs juste pour écrire des mots"/>
                    <ActuCard image="dwa" title="Ophtalmologie Glaucome" date="12 / 12 / 2024"
                              description="je ne sais pas quoi dire mais je vais dire des trucs juste pour écrire des mots"/>
                    <ActuCard image="dwa" title="Ophtalmologie Glaucome" date="12 / 12 / 2024"
                              description="je ne sais pas quoi dire mais je vais dire des trucs juste pour écrire des mots"/>
                    <ActuCard image="dwa" title="Ophtalmologie Glaucome" date="12 / 12 / 2024"
                              description="je ne sais pas quoi dire mais je vais dire des trucs juste pour écrire des mots"/>
                    <ActuCard image="dwa" title="Ophtalmologie Glaucome" date="12 / 12 / 2024"
                              description="je ne sais pas quoi dire mais je vais dire des trucs juste pour écrire des mots"/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
