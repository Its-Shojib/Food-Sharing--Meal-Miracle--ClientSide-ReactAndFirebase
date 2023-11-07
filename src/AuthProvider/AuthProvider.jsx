import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import auth from "../Firebase/Firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null);
    let [loading, setLoading] = useState(true);

    let googleProvider = new GoogleAuthProvider();


    let createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    let SignInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    let Logout = () => {
        setLoading(true);
        return signOut(auth);
    }
    let googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            console.log('observing: ', currentUser)
            let userEmail = currentUser?.email || user?.email;
            let loggedUser = { email: userEmail }
            setUser(currentUser);
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }
            else {
                axios.post('http://localhost:5000/logout', loggedUser, { withCredentials: true })
                .then(res=>{
                    console.log(res.data);
                })
            }
        })
        return () => {
            unSubscribe();
        }
    }, [])


    let authInfo = {
        user,
        createUser,
        SignInUser,
        Logout,
        googleSignIn,
        loading,
        setUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

};
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;