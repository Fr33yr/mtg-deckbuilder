import { createContext, useContext, useEffect, useState } from "react";
import {
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { auth } from '../config/firebase'

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("There is no auth provider")
    }
    return context
}

export function AuthProvider({ children }) {

    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    const singUp = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password)
    const logout = () => signOut(auth)

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
    }, [])


    return (
        <AuthContext.Provider
            value={{ singUp, logIn, loginWithGoogle, logout, user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}