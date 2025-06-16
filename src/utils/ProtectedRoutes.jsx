import {useEffect, useState } from 'react';
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const [isAuth, setIsAuth] = useState(null);

    useEffect(() => {
        const accessToken = sessionStorage.getItem('accessToken');
        if (!accessToken) {
            setIsAuth(false);
            return;
        }

        fetch('/verify', {
            header: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                setIsAuth(false);
            }
            else {
                setIsAuth(true);
            }
        })
        .catch(() => setIsAuth(false))
    }, []);

    if (isAuth === null) {return null};

    return isAuth ? <Outlet/> : <Navigate to ="/signup"/>
}

export default ProtectedRoutes