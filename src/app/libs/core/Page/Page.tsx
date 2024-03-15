import React, {ReactNode} from 'react';
import styles from "./page.module.css";


interface Props {
    children?: ReactNode,
}


export const Page = ({
                         children,
                     }: Props) => {

    return (
        <main className={styles.container}>
            {children}
        </main>
    );
};
