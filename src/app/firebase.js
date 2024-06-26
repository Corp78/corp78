import {getApps, initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: `${process.env.NEXT_PUBLIC_FIREBASE_APIKEY}`,
    authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN}`,
    projectId: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECTID}`,
    storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET}`,
    messagingSenderId: `${process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID}`,
    appId: `${process.env.NEXT_PUBLIC_FIREBASE_APPID}`,
    measurementId: `${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID}`
};
// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;