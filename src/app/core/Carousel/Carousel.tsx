"use client"

import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react';
import classes from './Carousel.module.css';
import {FaAngleLeft} from "react-icons/fa";

interface Props {
    content: ReactNode[];
}

export const Carousel = ({content}: Props) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [automaticScroll, setAutomaticScroll] = useState(false);
    const contentContainerRef = useRef<HTMLDivElement | null>(null);
    const [time, setTime] = useState<number>(3000)
    const intervalRef = useRef<NodeJS.Timeout | null>(null);


    const goToNextFrame = (previous?: boolean) => {
        if (!contentContainerRef) {
            return;
        }

        let newIndex = 0

        if (currentIndex + 1 < content.length && !previous) {
            newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
        } else if (previous && ((currentIndex - 1) > 0)) {
            newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
        } else {
            setCurrentIndex(0)
        }


        const gap = contentContainerRef.current?.scrollWidth ? (contentContainerRef.current?.scrollWidth / content.length) : 0;
        const newScrollPosition = newIndex * gap; // Assuming each frame is 800px wide
        if (contentContainerRef.current) {
            contentContainerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth',
            });
        }
        return currentIndex - newIndex;
    }

    const updateFrame = useCallback(() => {
        intervalRef.current = setInterval(() => {
            goToNextFrame()
            setTime(3000)
        }, time) as NodeJS.Timeout;
    }, [currentIndex, time])

    useEffect(() => {
        if (!automaticScroll) {
            return;
        }
        updateFrame()

        return () => clearInterval(intervalRef.current as NodeJS.Timeout)
    }, [content.length, currentIndex, time, automaticScroll]);


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => { // Step 3
            entries.forEach(entry => { // Step 4
                if (entry.isIntersecting) { // Step 6
                    setAutomaticScroll(true)
                } else {
                    setAutomaticScroll(false)
                }
            });
        });

        if (contentContainerRef.current) {
            observer.observe(contentContainerRef.current as HTMLDivElement)
        }


        return () => observer.disconnect()
    }, []);


    return (
        <div className={classes.container}>
            <div className={classes.side} onClick={() => {
                goToNextFrame(true)
                setTime(6000)
            }}><FaAngleLeft style={{fontSize: 30}}/></div>
            <div className={classes.contentContainer} ref={contentContainerRef} onClick={() => {
                clearInterval(intervalRef.current as NodeJS.Timeout)
                setTime(6000)
            }}>
                {content?.map((cont, index) => {
                    return <div key={index} id={`scrolling_${index}`} className={classes.content}>{cont}</div>;
                })}
            </div>
            <div className={classes.side} onClick={() => {
                goToNextFrame()
                setTime(6000)
            }}><FaAngleLeft
                style={{fontSize: 30, rotate: '180deg'}}/></div>
        </div>
    );
};