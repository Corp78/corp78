import React, {useMemo} from "react";
import classes from "./ActuCard.module.css";
import Image from 'next/image'
import {useRouter} from "next/navigation";
import classnames from "classnames";

interface Props {
    id: string;
    title: string;
    image: string;
    date: string;
    description: string;
}

export const ActuCard = ({id, title, image, date, description}: Props) => {

    const router = useRouter();
    const isAdd = id === "0";

    function removeMarkdownFormatting(text: string): string {
        // Regular expressions to match Markdown syntax
        const markdownRegex = /(?:\*|_|\~|`|\[|\]|\(|\)|\{|\}|#|\+|\-|\.|\!|\>|\<|\=|\^|\|)/g;

        // Replace Markdown syntax with an empty string
        return text.replace(markdownRegex, '');
    }

    const desc = useMemo(() => {
        return removeMarkdownFormatting(description);
    }, [description])

    return (
        <div className={classnames(classes.container, {
            [classes.container_addArticle]: isAdd,
        })} onClick={() => {
            if (isAdd) {
                router.push("/admin/dashboard/addArticle")
            } else {
                router.push(`/actu/${id}`)
            }
        }}>
            <div className={classes.imageContainer}>
                <Image src={image} alt="image" fill objectFit="cover"/>
            </div>
            <div className={classes.date}>
                <p>{date}</p>
            </div>
            <div className={classes.title_container}>
                <div className={classes.title}>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
};
