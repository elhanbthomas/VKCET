import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";


import '../css/login_container.css'
import college from '../assets/college.png'
function LoginContainer(){
    return (
        <>
        <Header />
        <div className="container">
            <div className="college"><img src={college} alt="college" /></div>
            <Outlet />
            </div>
            
        </>
    )
}

export default LoginContainer