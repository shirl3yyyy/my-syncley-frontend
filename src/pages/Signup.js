import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Signup.css";

function Signup({ role: propRole }) {
  const location = useLocation();
  const navigate = useNavigate();

  // fallback to query param if no prop was passed
  const queryParams = new URLSearchParams(location.search);
  const queryRole = queryParams.get("role");

  // final role = prop > query > default
  const role = propRole || queryRole || "client";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("/api/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate(`/profile/${res.data.user._id}`); // redirect to their profile
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  const containerClass = `signup-container ${role}`;

  return (
    <div className={containerClass}>
      <h2 className="signup-title">
        Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
      </h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit} className="signup-form">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

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

        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit" className="hero-button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
