"use client"

import {useEffect, useState} from "react";
import ArticlePage from "../ActuPage/ArticlePage";
import {useRouter} from "next/navigation";
import {Loading} from "@/app/libs/core";


const Article = () => {

    const [id, setId] = useState<string | null>("-1");
    const router = useRouter()

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        setId(searchParams.get('id'));
    }, []);

    if (!id) {
        return router.push('/actu')
    }

    if (id == "-1") {
        return <Loading addDiv/>
    }

    return (
        <ArticlePage id={id}/>
    );
}

export default Article;
