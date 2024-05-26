"use client"

import React, {useMemo, useState} from "react";
import classes from "./ActuCard.module.css";
import Image from 'next/image'
import {useRouter} from "next/navigation";
import classnames from "classnames";
import {deleteArticleById, formatDateDMY, updateArticleById} from "@/app/libs/utils/utilsFunction";
import {ButtonIcon, Modal} from "@/app/libs/core";
import {MdDelete, MdEdit, MdPushPin} from "react-icons/md";

interface Props {
    id: string;
    pin?: boolean;
    title: string;
    image: string;
    date?: Date;
    description: string;
    isAdmin?: boolean;
    onDelete?: () => void;
}

export const ActuCard = ({id, pin, title, image, date = new Date(), description, isAdmin, onDelete}: Props) => {

    const router = useRouter();
    const isAdd = id === "0";

    const [modalIsOpen, setModalIsOpen] = useState(false);


    function removeMarkdownFormatting(text: string): string {
        // Regular expressions to match Markdown syntax
        const markdownRegex = /[*_~`\[\](){}#+\-.!><=^|]/g;

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
                router.push(`/actu/article?id=${id}`)
            }
        }}>
            {
                isAdmin &&
                <div className={classes.header}>
                    <ButtonIcon indicator={pin} onClick={async () => {
                        await updateArticleById(id, {
                            pin: !pin
                        })
                        if (onDelete !== undefined) {
                            onDelete();
                        }
                    }}>
                        <MdPushPin className={classes.icon}/>
                    </ButtonIcon>
                    <ButtonIcon onClick={async () => {
                        router.push(`/admin/dashboard/addArticle?id=${id}`);
                    }}>
                        <MdEdit className={classes.icon}/>
                    </ButtonIcon>

                    <ButtonIcon del onClick={() => setModalIsOpen(true)}>
                        <MdDelete className={classes.icon}/>
                    </ButtonIcon>
                    <Modal title="Etes vous sur de vouloir supprimer cette article ? " isOpen={modalIsOpen}
                           onRequestClose={() => {
                               setModalIsOpen(false)
                           }} onSubmit={async () => {
                        await deleteArticleById(id, image);
                        if (onDelete !== undefined) {
                            onDelete();
                        }
                        setModalIsOpen(false)
                    }}
                           buttonTitle="Supprimer">
                        Cette action est irreversible
                    </Modal>
                </div>
            }
            <div className={classes.imageContainer}>
                <Image src={image} alt="image" fill priority={true}/>
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
