"use client"

import {ActuCard, Footer, Header} from "@/app/libs/core";
import classes from "./page.module.css";
import {collection, getDocs, getFirestore, query, where} from "@firebase/firestore";
import firebase_app from "@/app/firebase";
import {useEffect, useState} from "react";
import {Article} from "@/app/interfaces/articles";


export default function Actu() {

    const [articles, setArticles] = useState<Article[] | null>()

    const getArticles = async () => {
        const db = getFirestore(firebase_app);
        const q = query(collection(db, 'articles'), where('pin', "==", true));
        const querySnapshot = await getDocs(q);


        return querySnapshot.docs.map(doc => (
            {
                id: doc.id,
                ...doc.data()
            })) as Article[];
    }

    useEffect(() => {
        (async () => {
            const _articles = await getArticles();
            setArticles(_articles);
        })()
    }, []);


    return (
        <div className={classes.page_container}>
            <Header/>
            <div className={classes.container}>
                <h1>Actualités</h1>
                <div className={classes.actuContainer}>
                    {articles?.map((article: Article) => (
                        <ActuCard key={article.id} id={article.id} image={article.imageUrl} title={article.title}
                                  date="12 / 12 / 2024"
                                  description={article.article}/>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
}
