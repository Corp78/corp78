import React, {useMemo} from "react";
import classes from "./ActuCard.module.css";
import Image from 'next/image'
import {useRouter} from "next/navigation";
import classnames from "classnames";
import {deleteArticleById, formatDateDMY} from "@/app/libs/utils/utilsFunction";
import {ButtonIcon} from "@/app/libs/core";
import {MdDelete, MdEdit, MdPushPin} from "react-icons/md";

interface Props {
    id: string;
    title: string;
    image: string;
    date?: Date;
    description: string;
    isAdmin?: boolean;
    onDelete?: () => void;
}

export const ActuCard = ({id, title, image, date = new Date(), description, isAdmin, onDelete}: Props) => {

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
            [classes.container_admin]: isAdmin,
        })} onClick={() => {
            if (isAdmin) return;
            if (isAdd) {
                router.push("/admin/dashboard/addArticle")
            } else {
                router.push(`/actu/${id}`)
            }
        }}>
            {
                isAdmin &&
                <div className={classes.header}>
                    <ButtonIcon indicator={true}>
                        <MdPushPin className={classes.icon}/>
                    </ButtonIcon>
                    <ButtonIcon onClick={async () => {
                        router.push(`/admin/dashboard/addArticle?id=${id}`);
                    }}>
                        <MdEdit className={classes.icon}/>
                    </ButtonIcon>

                    <ButtonIcon del onClick={async () => {
                        await deleteArticleById(id, image);
                        onDelete && onDelete()
                    }}>
                        <MdDelete className={classes.icon}/>
                    </ButtonIcon>
                </div>
            }
            <div className={classes.imageContainer}>
                <Image src={image} alt="image" fill objectFit="cover"/>
            </div>
            <div className={classes.date}>
                <p>{formatDateDMY(date)}</p>
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
