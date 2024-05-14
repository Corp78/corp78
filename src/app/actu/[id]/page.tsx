"use client"

import classes from "@/app/admin/dashboard/addArticle/page.module.css";
import classes_2 from "./page.module.css";
import NextImage from "next/image";
import ReactMarkdown from "react-markdown";
import React, {useEffect, useState} from "react";
import {doc, getDoc, getFirestore} from "@firebase/firestore";
import firebase_app from "@/app/firebase";
import {Article} from "@/app/interfaces/articles";


const ArticlePage = ({params}: { params: { id: string } }) => {

    const [article, setArticle] = useState<Article | null>(null);

    const getArticleById = async (articleId: string): Promise<Article | null> => {
        try {
            const db = getFirestore(firebase_app);
            const articleRef = doc(db, 'articles', articleId); // Reference to the specific document by its ID
            const articleDoc = await getDoc(articleRef);

            if (articleDoc.exists()) {
                return {
                    id: articleDoc.id,
                    ...articleDoc.data()
                } as Article;
            } else {
                console.error('Article not found');
                window.location.href = "/actu"
                return null;
            }
        } catch (error) {
            throw error;
        }
    };


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