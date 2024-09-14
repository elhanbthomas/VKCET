import React from "react";
import Logo from '../assets/logo.png';
import '../css/header.css';
function Header(){
    return (
        <div className="header">
            <a href="" className="logo">
                <img src={Logo} alt="logo" />
            </a>

            <div className="heading">VKCET<span className="name">Attech</span></div>

            <div className="links">
                <a href="https://vkcet.com/">Go to website</a>
            </div>
        </div>
    )
}

export default Header