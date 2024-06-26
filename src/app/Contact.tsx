"use client"

import React from 'react';
import classes from "./Contact.module.css";
import {FaMapMarkerAlt, FaTrain} from "react-icons/fa";
import {FaPhoneFlip} from "react-icons/fa6";
import {MdEmail} from "react-icons/md";
import {ButtonLink} from "@/app/libs/core/Button/ButtonLink";
import {addLogAnalytics} from "@/app/libs/utils/utilsFunction";
import {AnalyticsEventName} from "@/app/libs/data/Analytics";


export const Contact = () => {


    return (
        <div className={classes.container} id="contact">

            <div className={classes.content}>
                <h2 className={classes.title}>Contact</h2>
                <div className={classes.box}>
                    <div className={classes.mapContainer}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2629.9414243235146!2d1.9199986!3d48.7639149!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6832cf6edb5a1%3A0xd8bcc6bdc37c1cea!2sCabinet%20Ophtalmologique%20Pariwest!5e0!3m2!1sfr!2sfr!4v1719875371851!5m2!1sfr!2sfr"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className={classes.map}
                        ></iframe>
                    </div>
                    <div className={classes.infoContainer}>
                        <div className={classes.infoContent}>
                            <FaMapMarkerAlt className={classes.icon}/>
                            <div className={classes.separatorRight}/>
                            <a href="https://maps.app.goo.gl/N6C2V8UEHqhPPpy9A"
                               className={classes.info}>14 rue de Monfort, Maurepas, 78310</a>
                        </div>
                        <div className={classes.infoContent}>
                            <FaPhoneFlip className={classes.icon}/>
                            <div className={classes.separatorRight}/>
                            <a href="tel:0130622324" className={classes.info}>01 30 62 23 24</a>
                        </div>
                        <div className={classes.infoContent}>
                            <MdEmail className={classes.icon}/>
                            <div className={classes.separatorRight}/>
                            <a href="mailto:cab.oph.pariwest@gmail.com"
                               className={classes.info}>cab.oph.pariwest@gmail.com</a>
                        </div>
                        <div className={classes.infoContent}>
                            <FaTrain className={classes.icon}/>
                            <div className={classes.separatorRight}/>
                            <p className={classes.info}>15min à pied de la gare (La Verrière)</p>
                        </div>
                        <div>
                            <ButtonLink text="Prendre rendez-vous" white
                                        href="https://www.doctolib.fr/ophtalmologue/maurepas/quentin-hays/booking?bookingFunnelSource=profile"
                                        onClick={() => {
                                            addLogAnalytics(AnalyticsEventName.click_meeting)
                                        }}
                            ></ButtonLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
