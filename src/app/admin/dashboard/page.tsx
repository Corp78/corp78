"use client"

import {ActuCard} from "@/app/libs/core";
import classes from "./page.module.css";
import {useEffect, useState} from "react";
import {Article} from "@/app/interfaces/articles";
import {useRouter} from "next/navigation";
import {getArticles} from "@/app/libs/utils/utilsFunction";


export default function Actu() {

    const [articles, setArticles] = useState<Article[] | null>(null)
    const [reload, setReload] = useState(false)
    const router = useRouter();


    useEffect(() => {
        (async () => {
            const _articles = await getArticles();
            setArticles(_articles);
        })()
    }, [router, reload]);


    return (
        <div className={classes.page_container}>
            <div className={classes.container}>
                <h1>Admin Actualités</h1>
                <div className={classes.actuMainContainer}>
                    <div className={classes.actuContainer}>
                        <ActuCard key={0} id="0" image="/addArticle.png" title="Ajouter un article"
                                  description="Créer un article"/>
                        {articles?.map((article: Article) => (
                            <ActuCard key={article.id} id={article.id} image={article.imageUrl} title={article.title}
                                      pin={article.pin}
                                      date={article.date}
                                      description={article.article} isAdmin onDelete={() => {
                                setReload(!reload)
                            }}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
