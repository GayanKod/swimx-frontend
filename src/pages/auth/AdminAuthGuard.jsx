import React from 'react';
import {Navigate} from 'react-router-dom';

const AdminAuthGuard = ({children}) => {
    const isLoggedInState = localStorage.getItem('isLoggedIn');

    return isLoggedInState === "true" ? children : <Navigate to="/admin/auth" replace/>;
};

export default AdminAuthGuard;
