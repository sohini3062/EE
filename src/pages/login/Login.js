import React from 'react'
import { Link } from 'react-router-dom'

import "../../style1.css";

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Sign In</h2>
            <form action="/dashboard">
                <p>
                    <label>Email Address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forgot password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Register</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
