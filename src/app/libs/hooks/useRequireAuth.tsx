import {getAuth, onAuthStateChanged, User} from 'firebase/auth';
import firebase_app from '@/app/firebase';
import {useEffect, useState} from 'react';

interface AuthState {
    user: User | null;
    loading: boolean;
}

export const useRequireAuth = (allowAnonymous?: boolean): AuthState => {
    const [authState, setAuthState] = useState<AuthState>({user: null, loading: true});

    useEffect(() => {
        const auth = getAuth(firebase_app);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            const newAuthState = {user, loading: false};
            setAuthState(newAuthState);
            if (!user && !allowAnonymous) {
                window.location.href = "/";
            }
        });

        return () => unsubscribe();
    }, [allowAnonymous]);

    return authState;
};