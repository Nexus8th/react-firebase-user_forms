import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(displayName, email, password) {
        return auth.createUserWithEmailAndPassword(displayName, email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function deleteAccount() {
        return auth.currentUser.delete()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updatePassword(password) {
        return auth.currentUser.updatePassword(password)
    }

    function updateEmail(email) {
        return auth.currentUser.updateEmail(email)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false);
        })
        return unsubscribe
    }
    , []);

    const value = {
        currentUser, signup, login, logout, deleteAccount, resetPassword, updatePassword, updateEmail
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}