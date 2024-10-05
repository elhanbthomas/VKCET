import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./navbar";
import axios from "axios";

function Dashboard(){

    const [profile,setprofile] = useState({})
    const [error,setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('accessToken');
            if(token){
                try{
                    const response = await axios.get('http://localhost:8000/api/dashboard/', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    console.log(response.data)
                    setprofile(response.data)
                } catch(err){
                        setError(err)
                    }
            }
        }

        fetchData();
    }, []);
    const name = profile.fname + " " + profile.lname

    if (error) return <div>Error: {error.message}</div>
    return (
        <>
            <Navbar name={name} />
            {/* {profile.email} */}
        </>
    )
}

export default Dashboard 