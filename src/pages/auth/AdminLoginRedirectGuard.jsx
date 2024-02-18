import React from 'react';
import {Navigate} from 'react-router-dom';

const LoginRedirectGuard = ({children}) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === "true";
    return isLoggedIn ? <Navigate to="/admin" replace/> : children;
};

export default LoginRedirectGuard;
