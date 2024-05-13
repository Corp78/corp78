"use client"

import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import firebase_app from "@/app/firebase";
import {useState} from 'react';
import {useFormik} from 'formik';


const Admin = () => {
    const [error, setError] = useState<string>('');

    const auth = getAuth(firebase_app);

    const formik = useFormik({
        initialValues: {
            pseudo: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                await signInWithEmailAndPassword(auth, values.pseudo, values.password);
                window.location.href = "/admin/dashboard"
            } catch (error) {
                setError('Identifiants incorrects. Veuillez réessayer.');
            }
        },
    });

    return (
        <div>
            <h1>Page Admin</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="pseudo">Pseudo</label>
                    <input
                        id="pseudo"
                        name="pseudo"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.pseudo}
                    />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>
                {error && <div>{error}</div>}
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
};

export default Admin;