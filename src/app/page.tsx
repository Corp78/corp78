import {Footer, Header, Page} from "@/app/libs/core";
import {Acceuil} from "@/app/Accueil";
import {Expertise} from "@/app/Expertise";
import {Review} from "@/app/Review";
import {Contact} from "@/app/Contact";

export default function Home() {
    return (
        <Page>
            <Header/>
            <Acceuil/>
            <Expertise/>
            <Review />
            <Contact />
            <Footer />
        </Page>
    );
}
