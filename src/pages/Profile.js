import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile.css";

const defaultAvatar = "https://www.gravatar.com/avatar/?d=mp&f=y";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    const fetchProfile = async () => {
      try {
        const res = await axios.get("/api/profile/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
        setFormData({
          name: res.data.name,
          email: res.data.email,
          bio: res.data.bio || "",
        });
      } catch (err) {
        console.error(err);
        setError("You are not authorized. Please log in again.");
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put("/api/profile/me", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
      setEditMode(false);
    } catch (err) {
      console.error("Error saving profile:", err);
      setError("Failed to update profile.");
    }
  };

  if (error) return <p className="error">{error}</p>;
  if (!user) return <p className="loading">Loading profile...</p>;

  return (
    <div className="profile-container">
      <h2>Welcome, {user.name}</h2>
      <div className="avatar-wrapper">
        <img
          src={user.avatar || defaultAvatar}
          alt="User Avatar"
          className="avatar"
        />
      </div>

      <div className="profile-details">
        <p>
          <strong>Name:</strong>{" "}
          {editMode ? (
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="edit-input"
            />
          ) : (
            user.name
          )}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {editMode ? (
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="edit-input"
            />
          ) : (
            user.email
          )}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
        <p>
          <strong>Bio:</strong>{" "}
          {editMode ? (
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="edit-input"
            />
          ) : (
            user.bio || "No bio provided."
          )}
        </p>

        <div className="social-links">
          <a href="https://github.com/yourname" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourname" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {editMode ? (
        <>
          <button className="save-button" onClick={handleSave}>Save</button>
          <button className="edit-button" onClick={() => setEditMode(false)}>Cancel</button>
        </>
      ) : (
        <button className="edit-button" onClick={() => setEditMode(true)}>Edit Profile</button>
      )}

      <PortfolioSection />

      <button
        className="logout-button"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}

function PortfolioSection() {
  const projects = [
    {
      title: "Personal Blog",
      description: "A responsive blog built with Gatsby.js and GraphQL.",
      image: "https://via.placeholder.com/200",
      link: "https://yourblog.com",
      github: "https://github.com/yourname/blog",
      tags: ["Gatsby", "GraphQL", "Blog"],
      status: "Live"
    },
    {
      title: "E-commerce App",
      description: "Full-stack MERN app with cart and payment integration.",
      image: "https://via.placeholder.com/200",
      link: "https://shopnow.com",
      github: "https://github.com/yourname/ecommerce",
      tags: ["React", "MongoDB", "Express"],
      status: "In Progress"
    },
    {
       title: "Portfolio Website",
       description: "Personal portfolio built with React and styled-components.",
       image: "https://via.placeholder.com/200",
       link: "https://yourportfolio.com",
       github: "https://github.com/yourname/portfolio",
       tags: ["React", "CSS", "Personal"],
       status: "Live"
  },
    {
    title: "Chat App",
    description: "Real-time chat application using Socket.io and Node.js.",
    image: "https://via.placeholder.com/200",
    link: "https://chatapp-demo.com",
    github: "https://github.com/yourname/chat-app",
    tags: ["Socket.io", "Node.js", "Real-time"],
    status: "Live"
  },
  {
    title: "AI Image Generator",
    description: "Uses OpenAI API to generate images from user prompts.",
    image: "https://via.placeholder.com/200",
    link: "https://aigen-demo.com",
    github: "https://github.com/yourname/ai-image-gen",
    tags: ["OpenAI", "API", "React"],
    status: "Prototype"
  },
  {
    title: "Fitness Tracker",
    description: "Mobile-first fitness tracking PWA with offline support.",
    image: "https://via.placeholder.com/200",
    link: "https://fittrack.com",
    github: "https://github.com/yourname/fitness-tracker",
    tags: ["PWA", "MongoDB", "React"],
    status: "Live"
  },
  {
    title: "Task Manager",
    description: "Trello-like drag & drop Kanban board using React DnD.",
    image: "https://via.placeholder.com/200",
    link: "https://kanban-app.com",
    github: "https://github.com/yourname/task-manager",
    tags: ["React", "DragDrop", "UX"],
    status: "In Progress"
  },
  {
    title: "Weather App",
    description: "Fetches real-time weather using OpenWeatherMap API.",
    image: "https://via.placeholder.com/200",
    link: "https://weatherplus.com",
    github: "https://github.com/yourname/weather-app",
    tags: ["API", "JavaScript", "OpenWeather"],
    status: "Live"
  }
];

  return (
    <div className="portfolio-section">
      <h3>My Portfolio</h3>
      <div className="portfolio-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <span className={`project-badge status-${project.status.toLowerCase().replace(" ", "-")}`}>
              {project.status}
            </span>
            <img src={project.image} alt={project.title} />
            <h4>{project.title}</h4>
            <p>{project.description}</p>

            <div className="tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>

            <div className="project-actions">
              <a href={project.link} className="project-btn" target="_blank" rel="noreferrer">Live Demo</a>
              {project.github && (
                <a href={project.github} className="project-btn secondary" target="_blank" rel="noreferrer">GitHub</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
