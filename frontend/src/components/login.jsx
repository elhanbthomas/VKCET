import React, {useEffect, useState} from "react";
import { Await, useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import '../css/login.css'

import student from '../assets/audience.png';
import teacher from '../assets/classroom.png';
import arrow from '../assets/left_arrow.svg';
function Login(){
    const {user} = useParams()
    if(user == 'student')
        var src = student;
    else if(user == 'faculty')
        var src = teacher;
    else
        var src = student

    const [formData, setformData] = useState(
        {
            'username': '',
            'password': ''
        }
    )
    const navigate = useNavigate(null);
    const [error,setError] = useState(null);

    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleFormSubmit = async (e) => {
        try{
            const response = await axios.post('http://localhost:8000/api/token', formData,{
                headers:{
                    'Content-Type': 'application/json',
                },
            });
            localStorage.setItem('accessToken', response.data.access);
            localStorage.setItem('refreshToken', response.data.refresh);
            navigate('/dashboard')
        }
        catch(err){
            setError(err)
        }
    }

    return (
        <form action={handleFormSubmit} method="post" className="loginform">
            <Link to={'/'} className="arrow"><img src={arrow} alt="back arrow" /></Link>
            <div className="icon"><img src={src} alt="icon" /></div>
            <div className="inputcontainer">
                <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    placeholder="Username"
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Password"
                    onChange={handleChange} 
                    required 
                />
            </div>
            <button type="submit" className="button">Login</button>
        </form>
    )
}


export default Login