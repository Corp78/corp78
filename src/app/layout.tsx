import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Cabinet Ophtalmologique Pariwest à Maurepas, 78 | Spécialistes en Rétine et Paupière",
    description: "Bienvenue au Cabinet Ophtalmologique Pariwest à Maurepas, dans le 78. Nos spécialistes, le Dr Quentin Hays et le Dr Karen Bitton-Chappe, offrent une expertise reconnue en chirurgie réfractive, cataracte, chirurgie des paupières, glaucome et autres troubles oculaires. Avec une approche personnalisée et des technologies de pointe, nous assurons des soins de qualité pour votre vision. Prenez rendez-vous dès maintenant pour une consultation. Nous sommes situés à proximité de la gare La Verrière, à 15 minutes à pied",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="fr">
        <body className={inter.className}>
        {children}</body>
        </html>
    );
}
