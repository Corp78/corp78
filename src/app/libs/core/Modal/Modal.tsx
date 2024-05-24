import classes from "./Modal.module.css";
import React from "react";
import {Button, ButtonIcon} from "@/app/libs/core";
import {IoClose} from "react-icons/io5";


interface Props {
    isOpen: boolean;
    onRequestClose: () => void;
    onSubmit: () => void;
    title?: string;
    children: React.ReactNode;
    buttonTitle?: string;

}

export const Modal = ({isOpen = false, title, onRequestClose, onSubmit, children, buttonTitle}: Props) => {

    if (!isOpen) {
        return false;
    }

    return (
        <div className={classes.modalContainer}>
            <div className={classes.modalOverlay}>
                <div className={classes.modalHeader}>
                    <h3>{title}</h3>
                    <ButtonIcon onClick={onRequestClose}>
                        <IoClose className={classes.icon}/>
                    </ButtonIcon>
                </div>
                <div className={classes.modalText}>
                    {children}
                </div>
                <div className={classes.modalFooter}>
                    <Button onClick={onSubmit} text={buttonTitle || "Submit"}/>
                </div>
            </div>
        </div>
    );
};

