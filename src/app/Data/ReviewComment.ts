interface ReviewComment {
    name: string;
    date: string;
    description: string;
    provenance: string;
}

export const reviewComment: ReviewComment[] = [
    {
        name: "Lucie A.",
        date: "06/07/2024",
        description: `Cabinet neuf, propre et bien agencé.
                        Accueil agréable.
                        Opération pour un Chalazion, tout c’est très bien passé.
                        Le Dr Hays a été réactif dans la prise en charge.
                        Après plusieurs visites ophtalmo, il est le seul à avoir réellement pris en compte mon problème.
                        Il a pris le temps de bien tout expliquer avant et après l’opération.
                        Merci beaucoup !`,
        provenance: "google"
    },
    {
        name: "Marion B.",
        date: "05/07/2024",
        description: `Premier rendez-vous pour ma fille. Nous avons été très bien accueilli.
                        Assistante et médecin très agréables.`,
        provenance: "google"
    },
    {
        name: "Jack V.",
        date: "02/2024",
        description: "Séduit par le professionnalisme et l'expérience sans faille du docteur Hays. Merci pour le conseil apporté lors de mes deux opérations de la cataracte. L'équipe du Dr m'a accompagné, conseillé et rassuré dans chacune des étapes de mes opérations. Je recommande vivement le service de ce Dr. Je lui souhaite succès et épanouissement personnel dans le cadre de ses fonctions. Que dieu vous garde.",
        provenance: "google"
    },
    {
        name: "Karine O.",
        date: "02/2024",
        description: "J’ai subi une chirurgie réfractive avec le docteur HAYS. C’est un médecin qui est à l’écoute, patient, rassurant et qui prend le temps de tout expliquer. Il assure un réel suivi à la suite de l’opération, qui m’a permis de recouvrer une vision optimale.",
        provenance: "google"
    },
    {
        name: "Pic F.",
        date: "01/2024",
        description: "Spécialiste de talent qui prend le temps d’expliquer la situation et d’informer sur l’intervention. Son talent n’a d’égal que sa gentillesse, sa courtoisie et son empathie rassurante. Le docteur Hays a procédé au « recollement » de ma rétine et a sauvé la vision de mon œil droit. En un mois ma vision était à nouveau confortable. Ce qui paraît définitivement perdu est corrigé par son action. Merci docteur Hays grâce à qui je vais passer d’excellentes fêtes de fin d’année.",
        provenance: "google"
    },
    {
        name: "Corinne F.",
        date: "01/2024",
        description: "M. FERRARI Émile a été opéré avec succès d'une GMA avec ectropion par le docteur HAYS. Un grand merci et une profonde reconnaissance envers vous pour votre professionnalisme, votre écoute et votre empathie rassurante.",
        provenance: "google"
    }
];