"use client"

import {useRouter} from "next/navigation";
import React, {useEffect} from "react";
import classes from "./page.module.css";
import {Loading} from "@/app/libs/core";
import {addLogAnalytics} from "@/app/libs/utils/utilsFunction";
import {AnalyticsEventName} from "@/app/libs/data/Analytics";

const QuentinPage = () => {

    const router = useRouter();

    useEffect(() => {
        // Redirect to the desired URL
        addLogAnalytics(AnalyticsEventName.scan_karen);
        router.push('https://www.doctolib.fr/ophtalmologue/maurepas/karen-bitton-chappe');
    }, [router]);

    return (
        <div className={classes.container}>
            <Loading/>
        </div>
    );
};

export default QuentinPage;