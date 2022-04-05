import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {handleGoogleSignIn}= useFirebase();
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
  
    const  signInWithGoogle = () => {
        handleGoogleSignIn(from, navigate)
    }
    return (
        <>
            <h1>Please Login</h1>
        <button onClick={signInWithGoogle}><i className="fab fa-google" style={{fontSize: '48px'}}></i></button>
        </>
    );
};

export default Login;