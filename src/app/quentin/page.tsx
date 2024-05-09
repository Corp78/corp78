"use client"

import {useRouter} from "next/navigation";
import React, {useEffect} from "react";
import classes from "./page.module.css";
import {Loading} from "@/app/libs/core";

const QuentinPage = () => {

    const router = useRouter();

    useEffect(() => {
        // Redirect to the desired URL
        router.push('https://www.doctolib.fr/ophtalmologue/maurepas/quentin-hays');
    }, [router]);

    return (
        <div className={classes.container}>
            <Loading/>
        </div>
    );
};

export default QuentinPage;