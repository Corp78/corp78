import React from 'react';
import classes from "./Contact.module.css";
import {FaMapMarkerAlt, FaTrain} from "react-icons/fa";
import {FaPhoneFlip} from "react-icons/fa6";
import {MdEmail} from "react-icons/md";
import {Button} from "@/app/libs/core";


export const Contact = () => {


    return (
        <div className={classes.container} id="contact">

            <div className={classes.content}>
                <h2 className={classes.title}>Contact</h2>
                <div className={classes.box}>
                    <div className={classes.mapContainer}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.844715180373!2d1.9415157777683048!3d48.7657616713198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6836da97c40fb%3A0x2fd2729b8abb02e1!2s2%20Rue%20de%20la%20Beauce%2C%2078310%20Maurepas!5e0!3m2!1sfr!2sfr!4v1710497339581!5m2!1sfr!2sfr"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className={classes.map}
                        ></iframe>
                    </div>
                    <div className={classes.infoContainer}>
                        <div className={classes.infoContent}>
                            <FaMapMarkerAlt className={classes.icon}/>
                            <div className={classes.separatorRight}/>
                            <p className={classes.info}> 2 rue de la beauce, Maurepas, 78310</p>
                        </div>
                        <div className={classes.infoContent}>
                            <FaPhoneFlip className={classes.icon}/>
                            <div className={classes.separatorRight}/>
                            <p className={classes.info}>0648487290</p>
                        </div>
                        <div className={classes.infoContent}>
                            <MdEmail className={classes.icon}/>
                            <div className={classes.separatorRight}/>
                            <p className={classes.info}>quentin.hays@corp78.fr</p>
                        </div>
                        <div className={classes.infoContent}>
                            <FaTrain className={classes.icon}/>
                            <div className={classes.separatorRight}/>
                            <p className={classes.info}>15min à pied de la gare (La Verrière)</p>
                        </div>
                        <div className={classes.buttonContainer}>
                            <Button text="Prendre rendez-vous" white></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
