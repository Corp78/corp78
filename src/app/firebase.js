import firebase from 'firebase';
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASURMENT_ID
};

if (typeof window !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
    if ('measurementId' in firebaseConfig) firebase.analytics()
}

export default firebase;