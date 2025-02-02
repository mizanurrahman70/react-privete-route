import React, { useContext } from 'react';
import { TextContext } from '../AuthContext/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivetRout = ({children}) => {
    const {user,loading}=useContext(TextContext)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }

    return (
        
       <Navigate to='/login'></Navigate>
    //    hello
    );
};

export default PrivetRout;