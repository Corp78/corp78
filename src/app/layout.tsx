import type {Metadata, Viewport} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Cabinet Ophtalmologique Pariwest à Maurepas, 78 | Spécialistes en Rétine et Paupière",
    description: "Bienvenue au Cabinet Ophtalmologique Pariwest à Maurepas, 78. Nos experts, Dr Quentin Hays et Dr Karen Bitton-Chappe, offrent une expertise en chirurgie réfractive, cataracte, chirurgie des paupières, glaucome, et autres troubles oculaires. Profitez de soins personnalisés avec des technologies avancées. Nous sommes situés près de la gare La Verrière, à 15 minutes à pied.",
    keywords: "ophtalmologie, ophtalmo, cabinet ophtalmologique Maurepas, ophtalmologue Maurepas, santé oculaire, chirurgien réfracteur Maurepas, glaucome, cataracte, chirurgie des paupières, rétinopathie, Maurepas 78, ophtalmologie, ophtalmo, cabinet ophtalmologique, ophtalmologue Maurepas, santé oculaire, chirurgien réfracteur Maurepas, glaucome, cataracte, chirurgie des paupières, rétinopathie, Maurepas 78, Élancourt, Plaisir, Trappes, Les Clayes-sous-Bois, La Verrière, Montigny-le-Bretonneux, Bois-d'Arcy, Saint-Quentin-en-Yvelines, Coignières, Jouars-Pontchartrain",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="fr">
        <body className={inter.className}>
        {children}
        </body>
        </html>
    );
}
