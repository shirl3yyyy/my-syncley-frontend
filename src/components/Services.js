import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPaintBrush,
  FaCode,
  FaPenNib,
  FaBullhorn,
  FaVideo,
  FaBriefcase,
  FaChartLine,
  FaHeadset,
  FaMusic,
  FaMobileAlt,
} from "react-icons/fa";
import axios from "axios";
import "./Services.css";

// Map category names to icons
const iconMap = {
  Design: <FaPaintBrush />,
  Development: <FaCode />,
  Writing: <FaPenNib />,
  Marketing: <FaBullhorn />,
  "Video & Animation": <FaVideo />,
  Business: <FaBriefcase />,
  Finance: <FaChartLine />,
  Support: <FaHeadset />,
  "Music & Audio": <FaMusic />,
  Apps: <FaMobileAlt />,
};

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        // Replace this URL with your backend API endpoint for fetching categories
        const res = await axios.get("/api/categories");
        setServices(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load categories");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleClick = (category) => {
    navigate(`/search?category=${encodeURIComponent(category)}`);
  };

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="categories">
      <h2>Explore Categories</h2>
      <div className="categories-grid">
        {services.map((cat, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => handleClick(cat.name)}
          >
            <div className="category-icon">{iconMap[cat.name] || <FaBriefcase />}</div>
            <h3>{cat.name}</h3>
            <p>{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
