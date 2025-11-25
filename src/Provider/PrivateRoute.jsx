import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../component/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loader } = use(AuthContext)
    const location = useLocation();
    console.log(location)

    if(loader){
        return <Loading></Loading>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>

};

export default PrivateRoute;