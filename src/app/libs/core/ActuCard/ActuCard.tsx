import React, {useMemo} from "react";
import classes from "./ActuCard.module.css";
import Image from 'next/image'
import {useRouter} from "next/navigation";

interface Props {
    id: string;
    title: string;
    image: string;
    date: string;
    description: string;
}

export const ActuCard = ({id, title, image, date, description}: Props) => {

    const router = useRouter();

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
        <div className={classes.container} onClick={() => {
            router.push(`/actu/${id}`)
        }}>
            <div className={classes.imageContainer}>
                <Image src={image} alt="image" fill/>
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
