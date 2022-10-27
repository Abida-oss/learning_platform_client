import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contex/AuthProvider/AuthProvider';


   
const PrivateRout = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location= useLocation();
    if(loading){
        return <div>Loading.........</div>
    }

    if(user && user.uid){
        return children;
    }
    return <Navigate to='/Signin' state={{from:location}} replace></Navigate>
 
};



export default PrivateRout;