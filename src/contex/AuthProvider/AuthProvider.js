import React,{useState} from 'react';
import {  createUserWithEmailAndPassword, getAuth,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";
import { createContext } from 'react';
import { useEffect } from 'react';
import app from '../../firebase/firebase.config';
export const AuthContext =createContext();
const auth=getAuth(app)


const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);

   // private routing
    const [loading,setLoading]=useState(true);


    const providerLogin=(provider)=>{
        setLoading(true); //private route

       return signInWithPopup(auth,provider);
    }

    const createUser=(email,password)=>{
        setLoading(true); //private route
        return createUserWithEmailAndPassword(auth,email,password)
    }



    const signIn=(email,password)=>{
        setLoading(true); //private route
        return signInWithEmailAndPassword(auth,email,password)

    }

  



    const logOut=()=>{
        setLoading(true); //private route
        return signOut(auth);
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            console.log('user auth state change',currentUser);
            setUser(currentUser); 
            setLoading(false);

        });
        return()=>{
            unsubscribe();
        }

    },[])



    const authInfo={user,loading,providerLogin,logOut,createUser,signIn};


    return (
        < AuthContext.Provider value={authInfo}>
            {children}
        </ AuthContext.Provider>
    );
};

export default AuthProvider;