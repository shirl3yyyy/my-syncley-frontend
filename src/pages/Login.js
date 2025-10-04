import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import API from "../services/api";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     setError("");

    try {

      const { data } = await API.post("/auth/login", formData);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

       // Notify other components (like Navbar)
      window.dispatchEvent(new Event("authChange"));

      navigate(`/profile/${data.user.id}`); // Use `id` not `_id`
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  // Handle Google Login Success
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      const { email, sub: googleId, name, picture } = decoded;

      // Send Google info to your backend
      const { data } = await API.post("/auth/google-login", {
        email,
        googleId,
        name,
        picture,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      window.dispatchEvent(new Event("authChange"));
      navigate(`/profile/${data.user.id}`);
    } catch (error) {
      console.error("Google login failed:", error);
      setError("Google login failed");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login to Your Account</h2>

      {error && <p className="error">{error}</p>}

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

        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      <div className="divider">OR</div>
      
            <div className="social-login">
              <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => setError("Google login failed")} />
      
              <button className="x-login-button" onClick={() => alert("Coming soon!")}>
                <img src="/assets/x-logo.svg" alt="X Logo" />
                Continue with X
              </button>
            </div>
      
            <p className="redirect-text">
              Don’t have an account? <a href="/signup-client">Sign up</a>
            </p>
    </div>
  );
}

export default Login;
