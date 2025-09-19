import { useLocation } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get("role");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData, "Role:", role);
    // You can call your API here
  }

  return (
    <div className="signup-container">
      <h2 className="signup-title">
        Sign Up as {role ? role.charAt(0).toUpperCase() + role.slice(1) : "User"}
      </h2>
      <form onSubmit={handleSubmit} className="signup-form">

        <label>Username:</label>
        <input
          type="text"
          name="username"
          placeholder="Enter your username"
          value={formData.username}
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

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
