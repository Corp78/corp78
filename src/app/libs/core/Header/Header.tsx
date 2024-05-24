"use client"

import React, {useEffect, useState} from 'react';
import classes from "./Header.module.css";
import {DropDown} from "@/app/libs/core/DropDown/DropDown";
import Image from "next/image";
import classnames from "classnames";
import {ButtonLink} from "@/app/libs/core/Button/ButtonLink";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

interface Props {
    admin?: boolean;
}

export const Header = ({admin}: Props) => {


    const [openMenu, setOpenMenu] = useState(false);

    const router = useRouter();
    const searchParams = useSearchParams()
    const pathname = usePathname()


    const closeOrOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

    const scrollTo = (id: string) => {
        const targetDiv = document.getElementById(id);
        let scrollPosition = (targetDiv?.getBoundingClientRect().top || 0) + window.scrollY - 116;
        if (id === "home") {
            scrollPosition = 0;
        }
        window.scrollTo({top: scrollPosition, behavior: 'smooth'});
        setOpenMenu(false);
    }


    useEffect(() => {
        const param = searchParams.get("tab");
        if (param) {
            scrollTo(param);
        }
    }, [searchParams]);

    const goTo = (id: string) => {
        if (pathname !== "/") {
            router.push(`/?tab=${id}`);
        } else {
            scrollTo(id)
        }
    };


    return (
        <div className={classes.mainContainer}>
            <div className={classes.container}>
                <div className={classes.nameContainer}>
                    <div className={classes.logoContainer} onClick={() => {
                        goTo('home')
                    }}>
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
                        <DropDown title="Accueil" onClick={() => goTo('home')}></DropDown>
                        {!admin && <div className={classes.separator}/>}
                        {!admin && <DropDown title="Expertises" linksDropDown={[{
                            title: "Chirurgie Réfractive",
                            href: "/réfractive"
                        }, {title: "Chirurgie Cataracte", href: "/cataracte"}, {
                            title: "Chirurgie Rétine",
                            href: "/rétine"
                        }, {title: "Chirurgie Paupiere", href: "/paupière"}, {
                            title: "Glaucome",
                            href: "/glaucome"
                        }, {title: "Lentilles", href: "/lentilles"}, {title: "DMLA", href: "/dmla"}]}
                                             onClick={() => goTo('expertise')}></DropDown>}
                        <div className={classes.separator}/>
                        <DropDown title="Actualités" onClick={() => {
                            router.push("/actu")
                        }}/>
                        <div className={classes.separator}/>
                        {!admin && <DropDown title="Contact" onClick={() => goTo('contact')}></DropDown>}

                        <div className={classes.meetingMenu}>
                            <div>
                                <ButtonLink className={classes.test} text="Prendre rendez-vous" white
                                            href="https://www.doctolib.fr/ophtalmologue/maurepas/quentin-hays/booking?bookingFunnelSource=profile"
                                ></ButtonLink>
                            </div>
                        </div>

                    </div>
                </div>
                {!admin && <div className={classes.meeting}>
                    <ButtonLink text="Prendre rendez-vous"
                                href="https://www.doctolib.fr/ophtalmologue/maurepas/quentin-hays/booking?bookingFunnelSource=profile"></ButtonLink>
                </div>
                }
                <div className={classes.menuButton} onClick={closeOrOpenMenu}>
                    <Image className={classes.image} src="/IoMenu.svg" alt="menu" width={40} height={40}/>
                </div>
            </div>
        </div>
    );
};


