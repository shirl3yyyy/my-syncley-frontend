import React from "react";
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
import "./Services.css";

const services = [
  { name: "Design", description: "Logos, branding, UI/UX & more", icon: <FaPaintBrush /> },
  { name: "Development", description: "Web, mobile, full-stack projects", icon: <FaCode /> },
  { name: "Writing", description: "Content, copywriting, translations", icon: <FaPenNib /> },
  { name: "Marketing", description: "SEO, ads, social media campaigns", icon: <FaBullhorn /> },
  { name: "Video & Animation", description: "Explainers, editing, motion design", icon: <FaVideo /> },
  { name: "Business", description: "Consulting, finance, strategy", icon: <FaBriefcase /> },
  { name: "Finance", description: "Accounting, investing, analysis", icon: <FaChartLine /> },
  { name: "Support", description: "Customer service, virtual assistance", icon: <FaHeadset /> },
  { name: "Music & Audio", description: "Production, voiceovers, sound design", icon: <FaMusic /> },
  { name: "Apps", description: "iOS, Android, cross-platform solutions", icon: <FaMobileAlt /> },
];

function Services() {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/search?category=${encodeURIComponent(category)}`);
  };

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
            <div className="category-icon">{cat.icon}</div>
            <h3>{cat.name}</h3>
            <p>{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
