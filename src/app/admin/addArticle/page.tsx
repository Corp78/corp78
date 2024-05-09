"use client"

import React, {useState} from "react";
import classes from './page.module.css'
import ReactMarkdown from "react-markdown";

const Page = () => {

    const [article, setArticle] = useState("");

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.container_editable}>
                    <textarea className={classes.textarea} onChange={(e) => setArticle(e.target.value)}/>
                </div>
                <div className={classes.separator}/>
                <div className={classes.container_view}>
                    <ReactMarkdown className={classes.markdown}>{article}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default Page;