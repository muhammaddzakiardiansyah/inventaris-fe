import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const location = useLocation();
    if (!localStorage.getItem('token')) {
        return <Navigate to='/login' state={{ fromPath: location.pathname }} />;
    }
    return children;
}