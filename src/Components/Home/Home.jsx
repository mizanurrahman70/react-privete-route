import React, { useContext } from 'react';
import { TextContext } from '../AuthContext/AuthContext';

const Home = () => {
    const AuthInfo=useContext(TextContext)
    console.log(AuthInfo)
    return (
        <div>
           
        </div>
    );
};

export default Home;