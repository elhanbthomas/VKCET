import React from "react";
import Header from "./header";
import Choices from "./login_choices";
import Login from "./login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import '../css/login_container.css'
import college from '../assets/college.png'
function LoginContainer(){
    return (
        <>
        <Header />
        <div className="container">
            <div className="college"><img src={college} alt="college" /></div>
            <Routes>
            <Route path="/" element={<Choices />}></Route>
            <Route path="/login/:user" element={<Login />}></Route>
            <Route path="/login" element={<Choices />}></Route>
            </Routes>
        </div>
        </>
    )
}

export default LoginContainer