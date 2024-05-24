"use client"

import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import firebase_app from "@/app/firebase";
import {useState} from 'react';
import {Form, Formik} from 'formik';
import {useRequireAuth} from "@/app/libs/hooks/useRequireAuth";
import {Button, Input, Loading} from "@/app/libs/core";
import {useRouter} from "next/navigation";
import classes from './page.module.css';
import * as Yup from 'yup';


const Admin = () => {
    const [error, setError] = useState<string>('');
    const {user, loading} = useRequireAuth(true)

    const auth = getAuth(firebase_app);
    const router = useRouter()

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Adresse e-mail invalide').required('Champ requis'),
        password: Yup.string().required('Champ requis'),
    });


    if (loading) {
        return <Loading addDiv/>
    }

    if (user) {
        router.push("/admin/dashboard")
        return <Loading addDiv/>
    }

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <h2 className={classes.title}>Admin Connexion</h2>
                <Formik initialValues={{
                    email: '',
                    password: ''
                }} onSubmit={async (values) => {
                    try {
                        await signInWithEmailAndPassword(auth, values.email, values.password);
                        router.push("/admin/dashboard")
                    } catch (error) {
                        setError('Identifiants incorrects. Veuillez réessayer.');
                    }
                }}
                        validationSchema={validationSchema}>
                    <Form className={classes.form}>
                        <Input title="E-mail" name="email"/>
                        <Input title="Mot de passe" name="password" type="password" eye/>
                        <Button text="Se connecter" type="submit"/>
                        <p className={classes.error}>{error}</p>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Admin;