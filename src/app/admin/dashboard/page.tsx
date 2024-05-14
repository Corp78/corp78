"use client"

import {useRequireAuth} from "@/app/libs/hooks/useRequireAuth";
import {Button, Loading} from "@/app/libs/core";
import {signOut} from "@firebase/auth";
import {getAuth} from "firebase/auth";
import firebase_app from "@/app/firebase";

const Dashboard = () => {

    const {user, loading} = useRequireAuth()

    const handleSignOut = async () => {
        try {
            const auth = getAuth(firebase_app);
            await signOut(auth);
            window.location.href = "/admin"
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    if (loading) {
        // Render loading indicator while waiting for authentication state
        return <Loading addDiv/>
    }


    return (
        <div style={{background: "#fff", minHeight: "100vh"}}>
            <h1>Page Admin Connected</h1>
            {user && <p>Connected</p>}
            {user && <Button onClick={handleSignOut}>Disconnect</Button>}
            {user && <Button onClick={() => {
                window.location.href = "/admin/dashboard/addArticle"
            }}>Ajouter un article</Button>}
        </div>
    );
};

export default Dashboard;