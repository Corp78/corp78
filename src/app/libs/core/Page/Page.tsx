import React, {ReactNode} from 'react';
import styles from "./page.module.css";


interface Props {
    children?: ReactNode,
    style?: React.CSSProperties
}


export const Page = ({
                         children,
                         style
                     }: Props) => {

    return (
        <main className={styles.container} style={style}>
            {children}
        </main>
    );
};
