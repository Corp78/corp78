"use client"

import classes from "./page.module.css";
import Image from "next/image";
import {useCallback, useEffect, useRef, useState} from "react";

const images = ['/cabinet.jpg', '/desk.jpg', '/outside.jpg'];

export const FirstContent = () => {

    const [image, setImage] = useState(0);
    const [nextImage, setNextImage] = useState(1);
    const [transition, setTransition] = useState(false);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const changeImage = useCallback(() => {
        intervalRef.current = setInterval(() => {
            setTransition(true);
            setTimeout(() => {
                setTransition(false);
                setNextImage((prevImage) => (prevImage + 1) % images.length);
            }, 500); // Match this duration with the CSS transition duration
            setTimeout(() => {
                setImage((prevImage) => (prevImage + 1) % images.length);
            }, 250); // Match this duration with the CSS transition duration
        }, 5000) as NodeJS.Timeout;
    }, []);

    useEffect(() => {
        changeImage();
        return () => clearInterval(intervalRef.current as NodeJS.Timeout)
    }, [image]);
    

    return (
        <div className={classes.imageMainContainer}>
            <div className={classes.imageContainer}>
                <Image src={images[nextImage]} alt="cataract" fill/>
                <Image src={images[image]} alt="cataract" fill
                       style={{opacity: transition ? 0 : 1, transition: transition ? 'all .25s ease' : 'none'}}/>
            </div>
            <div className={classes.introContainer}>
                <p className={classes.introTitle}>Découvrez le <strong>Cabinet Ophtalmologique Pariwest</strong>,
                    votre
                    espace dédié à la santé visuelle au
                    cœur des Yvelines. Niché dans le tout nouvel <strong>Espace Santé Pariwest</strong> à
                    Maurepas, notre
                    cabinet est équipé des technologies les plus avancées pour répondre à toutes vos
                    attentes en matière de santé oculaire.</p>
            </div>
        </div>
    );
};