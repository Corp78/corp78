"use client"

import {ActuCard, Footer, Header} from "@/app/libs/core";
import classes from "./page.module.css";
import {useEffect, useState} from "react";
import {Article} from "@/app/interfaces/articles";
import {getArticles} from "@/app/libs/utils/utilsFunction";


const Actu = () => {

    const [articles, setArticles] = useState<Article[] | null>()


    useEffect(() => {
        (async () => {
            const _articles = await getArticles({pin: true});
            setArticles(_articles);
        })()
    }, []);


    return (
        <div className={classes.page_container}>
            <Header/>
            <div className={classes.container}>
                <h1>Actualités</h1>
                <div className={classes.actuMainContainer}>
                    <div className={classes.actuContainer}>
                        {articles?.map((article: Article) => (
                            <ActuCard key={article.id} id={article.id} image={article.imageUrl} title={article.title}
                                      date={article.date}
                                      description={article.article}/>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Actu;
