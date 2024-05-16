"use client"

import classes from "@/app/admin/dashboard/addArticle/page.module.css";
import classes_2 from "./page.module.css";
import NextImage from "next/image";
import ReactMarkdown from "react-markdown";
import React, {useEffect, useState} from "react";
import {Article} from "@/app/interfaces/articles";
import {IoMdArrowRoundBack} from "react-icons/io";
import {useRouter} from "next/navigation";
import {getArticleById} from "@/app/libs/utils/utilsFunction";


const ArticlePage = ({params}: { params: { id: string } }) => {

    const [article, setArticle] = useState<Article | null>(null);
    const router = useRouter()


    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const articleData = await getArticleById(params.id);
                setArticle(articleData);
            } catch (error) {
                console.error('Error fetching article:', error);
                // Redirect to '/actu' on error
                window.location.href = "/actu";
            }
        };
        (async () => {
            await fetchArticle()
        })();

    }, [params.id]);

    return (
        <div className={classes_2.container_view_block}>
            <div className={classes.buttonReturn} onClick={() => {
                router.push("/actu")
            }}>
                <IoMdArrowRoundBack className={classes.iconReturn}/>
            </div>
            {
                article && <div className={classes.container_view}>
                    {
                        <div className={classes.imageContainer}>
                            <NextImage src={article.imageUrl} alt="image article" objectFit="cover" fill/>
                        </div>
                    }
                    <ReactMarkdown
                        className={classes.markdown}>
                        {`# ${article.title}\n` + article.article}
                    </ReactMarkdown>
                </div>
            }
        </div>
    );
};


export default ArticlePage;