import React, { useState } from "react";
import './Login.css';

function Login() {
    const [formData, setFormData] = useState({email: "", password:""})

    const handleChange = (e) => {
        setFormData({
            formData, [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted",formData);
    };

    return(
       <div className="login-container">
        <h2 className="login-title">Login to Your Account</h2>
        <form onSubmit={handleSubmit} className="login-form"> 
            <label>Email:</label>
            <input 
                type="email" 
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <label>Password:</label>
            <input 
                type="password" 
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
            />  

            <button type="submit" className="login-button">Login</button>
        </form>
       </div>
    );
}   
    
export default Login;