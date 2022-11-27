import React from 'react'
import { Link } from 'react-router-dom'
import "../../style1.css";
import BackgroundImage from '../../assets/images/bg.jpg'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <div className='container'>
            <h1 className="main-title text-center">Welcome to TROD</h1>
            <p className="main-para text-center"></p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">Log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn">Register</button>
                </Link>
                </div>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
}