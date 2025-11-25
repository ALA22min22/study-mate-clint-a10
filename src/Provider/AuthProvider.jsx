
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../FIrebase/Firebase.config';


export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    

    const handleRegister = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }
    const signInFrom = (email, password)=> {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutClick = () => {
        setLoader(true);
        return signOut(auth);
    }

    useEffect(()=> {
        const disConnect = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoader(false);
            console.log(currentUser);
        })
        return () => {
            disConnect();
        }
    }, [])


    const authData = {
        user,
        setUser,
        loader,
        handleRegister,
        googleLogin,
        signInFrom,
        signOutClick,
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;