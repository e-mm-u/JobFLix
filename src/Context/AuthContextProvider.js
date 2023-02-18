import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const createUser = (email, pass) =>{
        console.log('creating user');
        return createUserWithEmailAndPassword(auth, email, pass);
    }
    const updateUser = (userInfo) =>{
        console.log('updating user');
        return updateProfile(auth.currentUser, userInfo);
    }
    const login = (email, pass) =>{
        console.log('user logging in');
        return signInWithEmailAndPassword(auth, email, pass);
    }
    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }
    const logOut = () => {
        console.log('logging out');
        return signOut(auth);
    }

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged( auth, (currentUser)=>{
            console.log('monitoring user');
            setUser(currentUser);
        })

        return ()=> unsubscribe();
    }, [])

    const authInfo = { 
        createUser, updateUser,
        login, googleLogin, logOut,
        user, setUser, loading, setLoading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;