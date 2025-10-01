import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

   useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

     const fetchProfile = async () => {
      try {
        const res = await axios.get("/api/profile/me", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUser(res.data);
      } catch (err) {
        console.error("Failed to fetch profile:", err);
        setError("You are not authorized. Please log in again.");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  if (error) return <p className="error">{error}</p>;

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="profile-container">
      <h2>Welcome, {user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
      {user.avatar && (
        <img src={user.avatar} alt="User Avatar" width={100} height={100} />
      )}
    

    <button onClick={() => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/login");
}}>
  Logout
</button>
</div>

  );
}

export default Profile;
