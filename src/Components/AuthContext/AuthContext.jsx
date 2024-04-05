import { createUserWithEmailAndPassword ,onAuthStateChanged,signInWithEmailAndPassword, signOut} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
export const TextContext=createContext(null)
import auth from '../fire-base/fire-base-config';
const AuthContext = ({children}) => {
    const [loading,setLoading]=useState(true)
     const [user,setUser]=useState(null)
    const creatUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser=(email,password)=>{
        setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
       const unsubsribe= onAuthStateChanged(auth,(carrenUser)=>{
        setLoading(false)
            setUser(carrenUser)    
            })
        return ()=>{
            unsubsribe()
        }

    },[])
    console.log(user)
    const AuthInfo={
        loading,
        creatUser,
        loginUser,
        logOut,
        setUser,
        user

    }
    return (
        <TextContext.Provider value={AuthInfo}>
            {children}
        </TextContext.Provider>
    );
};

export default AuthContext;