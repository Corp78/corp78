import {Article} from "@/app/interfaces/articles";
import {collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query, where} from "@firebase/firestore";
import firebase_app from "@/app/firebase";
import {deleteObject, getStorage, ref} from "@firebase/storage";

export function deepEqual<T>(obj1: T, obj2: T): boolean {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return obj1 === obj2;
    }

    const keys1 = Object.keys(obj1) as (keyof T)[];
    const keys2 = Object.keys(obj2) as (keyof T)[];

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        const value1 = obj1[key];
        const value2 = obj2[key];

        // If the values are both strings and either is undefined or empty string, consider them equal

        if (value1 === null && (value2 === null || value2 === undefined || value2 === "")) {
            continue;
        }


        if (!keys2.includes(key) || !deepEqual(value1, value2)) {
            return false;
        }
    }

    return true;
}

export const getArticleById = async (articleId: string): Promise<Article | null> => {
    try {
        const db = getFirestore(firebase_app);
        const articleRef = doc(db, 'articles', articleId); // Reference to the specific document by its ID
        const articleDoc = await getDoc(articleRef);

        if (articleDoc.exists()) {
            return {
                id: articleDoc.id,
                ...articleDoc.data(),
            } as Article;
        } else {
            console.error('Article not found');
            window.location.href = "/actu"
            return null;
        }
    } catch (error) {
        throw error;
    }
};

interface ArticlesOptions {
    pin?: boolean; // Making pin optional in options
}

export const getArticles = async (options: ArticlesOptions = {}): Promise<Article[]> => {
    const db = getFirestore(firebase_app);

    let q = undefined;
    if (options.pin) {
        q = query(collection(db, 'articles'), where('pin', '==', true));
    } else {
        q = query(collection(db, 'articles'))
    }
    const querySnapshot = await getDocs(q);

    const articles: Article[] = querySnapshot.docs.map(doc => {
        const {date, ...rest} = doc.data();
        return {
            id: doc.id,
            date: date.toDate(),
            ...rest,
        } as Article;
    });

    // Sort articles by date in descending order
    articles.sort((a, b) => b.date.getTime() - a.date.getTime());

    return articles;
};

export const deleteArticleById = async (documentId: string, imageUrl?: string | null): Promise<void> => {
    const db = getFirestore(firebase_app);
    const storage = getStorage(firebase_app);
    try {
        if (imageUrl) {
            const imageRef = ref(storage, imageUrl);
            await deleteObject(imageRef);
        }
        const documentRef = doc(db, 'articles', documentId);
        await deleteDoc(documentRef);
        console.log(`Document with ID ${documentId} successfully deleted.`);
    } catch (error) {
        console.error('Error deleting document:', error);
        throw error; // Optionally re-throw the error for handling in the caller function
    }
};

export const formatDateDMY = (date: Date): string => {

    const formatter = new Intl.DateTimeFormat('fr-FR', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    });
    return formatter.format(date) // Add spaces around slashes
};