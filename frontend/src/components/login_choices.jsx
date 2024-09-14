import React from "react";
import { Link, useParams } from "react-router-dom";

import student from '../assets/audience.png';
import teacher from '../assets/classroom.png'

function Choices(){
    return (
        <div className="cardContainer">
            <Link to={`/login/${'student'}`} className="card">
                <div className="icon"><img src={student} alt="students icon" /></div>
                <div className="title">Student Login</div>
            </Link>

            <Link to={`/login/${'faculty'}`} className="card">
                <div className="icon"><img src={teacher} alt="teacher icon" /></div>
                <div className="title">Faculty Login</div>
            </Link>
        </div>
    )
}

export default Choices