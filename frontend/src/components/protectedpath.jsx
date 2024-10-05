import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedPath = ({children}) => {
    const token = localStorage.getItem('accessToken')
    // console.log(token)
    return token ? children : <Navigate to={'/'} />
}

export default ProtectedPath