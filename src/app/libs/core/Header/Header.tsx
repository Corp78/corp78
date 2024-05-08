"use client"

import React, {useState} from 'react';
import classes from "./Header.module.css";
import {DropDown} from "@/app/libs/core/DropDown/DropDown";
import Image from "next/image";
import classnames from "classnames";
import {ButtonLink} from "@/app/libs/core/Button/ButtonLink";


export const Header = () => {


    const [openMenu, setOpenMenu] = useState(false);

    const closeOrOpenMenu = () => {
        setOpenMenu(!openMenu);
        console.log(openMenu)
    }

    const scrollTo = (id: string) => {
        const targetDiv = document.getElementById(id);
        let scrollPosition = (targetDiv?.getBoundingClientRect().top || 0) + window.scrollY - 116;
        if (id === "home") {
            scrollPosition = 0;
        }
        window.scrollTo({top: scrollPosition, behavior: 'smooth'});
        setOpenMenu(false);
    };


    return (
        <div className={classes.mainContainer}>
            <div className={classes.container}>
                <div className={classes.nameContainer}>
                    <div className={classes.logoContainer}>
                        <Image className={classes.logo} src="/logo.svg" alt="corp78" fill
                               sizes="(max-width: 64px) , (max-width: 64px)"/>
                    </div>
                </div>
                <div className={classnames(classes.menuContainer, {
                    [classes.openMenu]: openMenu,
                    [classes.closeMenu]: !openMenu,
                })}>
                    <div className={classes.dropDownContainer}>
                        <div className={classes.closeMenuButtonContainer}>
                            <div className={classes.menuButton} onClick={closeOrOpenMenu}>
                                <Image className={classes.image} src="/IoClose.svg" alt="menu" width={40} height={40}/>
                            </div>
                        </div>
                        <DropDown title="Acceuil" onClick={() => scrollTo('home')}></DropDown>
                        <div className={classes.separator}/>
                        <DropDown title="Expertises" linksDropDown={[{
                            title: "Chirurgie Réfractive",
                            href: "/réfractive"
                        }, {title: "Chirurgie Cataracte", href: "/cataracte"}, {
                            title: "Chirurgie Rétine",
                            href: "/rétine"
                        }, {title: "Chirurgie Paupiere", href: "/paupière"}, {
                            title: "Glaucome",
                            href: "/glaucome"
                        }, {title: "Lentilles", href: "/lentilles"}, {title: "DMLA", href: "/dmla"}]}
                                  onClick={() => scrollTo('expertise')}></DropDown>
                        <div className={classes.separator}/>
                        <DropDown title="Actualités"/>
                        <div className={classes.separator}/>
                        <DropDown title="Contact" onClick={() => scrollTo('contact')}></DropDown>

                        <div className={classes.meetingMenu}>
                            <div>
                                <ButtonLink className={classes.test} text="Prendre rendez-vous" white
                                            href="https://www.doctolib.fr/ophtalmologue/maurepas/quentin-hays/booking?bookingFunnelSource=profile"
                                            target="_blank"
                                            rel="noopener noreferrer"></ButtonLink>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={classes.meeting}>
                    <ButtonLink text="Prendre rendez-vous"
                                href="https://www.doctolib.fr/ophtalmologue/maurepas/quentin-hays/booking?bookingFunnelSource=profile"
                                target="_blank"
                                rel="noopener noreferrer"></ButtonLink>
                </div>
                <div className={classes.menuButton} onClick={closeOrOpenMenu}>
                    <Image className={classes.image} src="/IoMenu.svg" alt="menu" width={40} height={40}/>
                </div>
            </div>
        </div>
    );
};


