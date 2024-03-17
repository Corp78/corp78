"use client"

import React from 'react';
import classes from "./Review.module.css";
import {Button, ReviewCard} from "@/app/libs/core";
import {useRouter} from "next/navigation";


export const Review = () => {

    const router = useRouter()

    return (
        <div className={classes.container} id="review">
            <div className={classes.backgroundCircle1}/>
            <div className={classes.backgroundCircle2}/>
            <div className={classes.content}>
                <h2 className={classes.title}>Avis Clients</h2>
            </div>
            <div className={classes.reviewContainer}>
                <div className={classes.reviewContent}>
                    <ReviewCard
                        name="Jack V."
                        date="02/2024"
                        description="Séduit par le professionnalisme et l'expérience sans faille du docteur Hays. Merci pour le conseil apporté lors de mes deux opérations de la cataracte. L'équipe du Dr m'a accompagné, conseillé et rassuré dans chacune des étapes de mes opérations. Je recommande vivement le service de ce Dr. Je lui souhaite succès et épanouissement personnel dans le cadre de ses fonctions. Que dieu vous garde."
                        provenance="google"/>

                    <ReviewCard
                        name="Karine O."
                        date="02/2024"
                        description="J’ai subi une chirurgie réfractive avec le docteur HAYS. C’est un médecin qui est à l’écoute, patient, rassurant et qui prend le temps de tout expliquer. Il assure un réel suivi à la suite de l’opération, qui m’a permis de recouvrer une vision optimale."
                        provenance="google"/>

                    <ReviewCard
                        name="Pic F."
                        date="01/2024"
                        description="Spécialiste de talent qui prend le temps d.expliquer la situation et d’informer sur l’intervention.Son talent n’a d’egal que sa gentillesse, sa courtoisie et son empathie rassurante. Le docteur Hays a procéder au « recollement »de ma rétine et a sauvé la vision de mon œil droit.En un mois ma vision était à nouveau confortable.Ce qui paraît définitivement perdu est corrigé par son action. Merci docteur Hays grâce à qui je vais passer d’excellentes fêtes de fin d’annee"
                        provenance="google"/>


                    <ReviewCard
                        name="Corinne F."
                        date="01/2024"
                        description="M. FERRARI Émile a été opéré avec succès d'une GMA avec ectropion par le docteur HAYS. Un grand merci et une profonde reconnaissance envers vous pour votre professionnalisme, votre écoute et votre empathie rassurante."
                        provenance="google"/>

                    <ReviewCard
                        name="Berenice C."
                        date="12/2023"
                        description="Un grand merci au Docteur Quentin Hays pour sa gentillesse et son grand professionnalisme. Il a réalisé une opération au lasirk pour une monovision qui me permet de voir de loin et de prêt. C’est impressionnant mais le Dr Hays et l’équipe du bloc sont vraiment rassurants. Tout se passe vite mais en douceur. Les gouttes anesthésiantes sont magiques. Il y a une petite odeur de brûlé quand le laser agit mais rien de méchant et ça va tellement vite…. Une fois l’opération terminée, l’anesthésie se dissipe et il y a environ 4 heures ouvous devez garder les yeux fermés pour plus de confort. La première nuit vous devez dormir avec une coque (prévoir les sparadraps). Vous avez un petit traitement de gouttes à suivre pdt qq jours (antibio et anti-inflammatoires) + larmes. Une visite de contrôle le lendemain et une visite le mois suivant. Le Dr Hays vous accueille avec un grand sourire que vous voyez hyper bien 😃 !!!! Bref Foncez !"
                        provenance="google"/>


                    <ReviewCard
                        name="Bertrand P."
                        date="16/07/2023"
                        description="Je tiens particulièrement à remercier le docteur Quentin Hays. Je suis suivi depuis de nombreuses années aux 15-20 pour un kératocône aux deux yeux. Lors de mon rendez-vous avec le docteur Hays en septembre, il m’a convaincu de me faire opérer afin de me placer un anneau cornéen sur l’oeil droit. Il m’a opéré le 10 octobre. Un mois après l’opération, j’ai récupéré, sans lunette, cinq dixième de vision de l’oeil droit. Merci infiniment au docteur Hays pour sa gentillesse, sa patience, son professionnalisme et son expertise."
                        provenance="Lemedecin.fr"/>
                </div>

            </div>
            <div className={classes.buttonContainer}>
                <Button text="Ajouter un avis"
                        onClick={() => {
                            window.open('https://www.google.com/search?sca_esv=b8d6872986dba9cf&tbm=lcl&sxsrf=ACQVn09Fc4SY6AIks7ExPYS_QH8OHEozfg:1710498612636&q=Dr+Quentin+HAYS+-+Laser+Myopie+-+Chirurgie+Cataracte+et+R%C3%A9tine+-+Ophtalmologue+Paris+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NbcwNzYxMTY3MDI2NbU0NTUz3MDI-IoxyqVIIbA0Na8kM0_BwzEyWEFXwSexOLVIwbcyvyAzFch1zsgsKi1KB7KdE0sSixKTS1IVUksUgg6vBOoBKfAvyChJzMnNz8lPL01VCEgsyixWcCzLLF7ESkPDAc9O60XUAAAA&rldimm=5787344370235595561&hl=fr-FR&sa=X&ved=2ahUKEwjiiMfxh_aEAxWzBfsDHejcAlgQ9fQKegQIGxAF&biw=1768&bih=1039&dpr=1#lkt=LocalPoiReviews', '_blank')
                        }}
                />
            </div>
        </div>

    );
};