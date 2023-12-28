import React, { useContext, useState } from "react"
import {auth } from '../config/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    const signUp = (email,password) => {
        return createUserWithEmailAndPassword(auth, email,password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signUp
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}