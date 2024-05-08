import React from "react";
import classnames from 'classnames';
import Link from 'next/link';
import classes from "./Buttton.module.css";

interface BaseButtonProps {
    className?: string;
    text?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    iconClassName?: string;
    type?: 'button' | 'submit' | 'reset';
    full?: boolean;
    line?: boolean;
    white?: boolean;
    href: string;
}

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

type GenericButtonProps = ButtonProps;

export const ButtonLink = (props: BaseButtonProps & GenericButtonProps) => {
    const {
        className,
        onClick,
        type,
        full,
        line,
        white,
        href,
        ...rest
    } = props;

    return (
        <Link href={href} target="_blank"
              rel="noopener noreferrer"
              className={classnames(
                  classes.blockColor,
                  {
                      [classes.full]: props.full,
                      [classes.line]: props.line,
                      [classes.white]: props.white
                  },
                  className,
              )}
              onClick={onClick}
              type={type}
        >
            {props.children}
            {props.text && props.text}
        </Link>
    );
};