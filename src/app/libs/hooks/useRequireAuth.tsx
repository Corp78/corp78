import {getAuth, onAuthStateChanged, User} from 'firebase/auth';
import firebase_app from '@/app/firebase';
import {useEffect, useState} from 'react';

interface AuthState {
    user: User | null;
    loading: boolean;
}

interface Props {
    allowAnonymous?: boolean | undefined;
}

export const useRequireAuth = (props: Props): AuthState => {
    const [authState, setAuthState] = useState<AuthState>({
        user: null,
        loading: true,
    });

    useEffect(() => {
        const auth = getAuth(firebase_app);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setAuthState({user, loading: false});
            if (!user && !props.allowAnonymous) {
                // Redirect to login page or handle unauthorized access
                window.location.href = "/"
            }
        });

        return () => unsubscribe();
    }, [props?.allowAnonymous]);

    return authState;
};