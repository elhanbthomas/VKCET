import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import DropdownBox from "./dropdown";

import logo from '../assets/logo2.png'
import menu from '../assets/menu.svg'
import downarrow from '../assets/down_arrow.svg'
import '../css/navbar.css'


function Navbar({name}){

    const navigate = useNavigate()
    const handleLogout = async (e) => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        navigate('/')
    }
    return (
        <>
            <div className="navbar">
            <Link to={'/dashboard'} className="logo"><img src={logo} alt="logo"/></Link>
            <div className="Heading">Attech</div>
            <div className="menu"><img src={menu} alt="menu" /></div>
            {/* <div className="logout" onClick={handleLogout}>Logout</div> */}
            <div className="dropdown">
                <div className="name">{name}</div>
                <div className="dropArrow"><img src={downarrow} alt="down arrow" /></div>
            </div>
            
        </div>

        <div className="dropbox"><DropdownBox /></div>
        </>
        
    )
}

export default Navbar