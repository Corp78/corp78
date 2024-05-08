"use client"

import {useRouter} from "next/navigation";
import {useEffect} from "react";
import classes from "./page.module.css";

const QuentinPage = () => {

    const router = useRouter();

    useEffect(() => {
        // Redirect to the desired URL
        router.push('https://www.doctolib.fr/ophtalmologue/maurepas/quentin-hays');
    }, [router]);

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Loading</h1>
        </div>
    );
};

export default QuentinPage;