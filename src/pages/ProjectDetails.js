import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.jpg";
import mobileImg from "../assets/mobile.jpg";
import brandImg from "../assets/brand.jpg";

import "./ProjectDetails.css";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", message: "" });

  // ✅ All projects grouped by category (inside same file)
  const projectsData = {
    Design: [
      {
        id: "1",
        title: "UI/UX Redesign for Tech Startup",
        description:
          "A full redesign of a startup’s dashboard to improve usability and visual appeal.",
        client: "Acme Corp",
        price: "$500",
        status: "Open for proposals",
        image: logoImg,
      },
      {
        id: "2",
        title: "Logo Design for New Brand",
        description:
          "Create a bold, modern logo for a coffee brand launching in Europe.",
        client: "BeanCo",
        price: "$350",
        status: "Completed",
        image: brandImg,
      },
      {
        id: "3",
        title: "App UI Mockups",
        description:
          "Design clean and interactive app screens for a mobile booking app.",
        client: "TravelEasy",
        price: "$600",
        status: "In Progress",
        image: mobileImg,
      },
    ],

    Development: [
      {
        id: "4",
        title: "E-Commerce Web App",
        description:
          "Build a modern e-commerce platform using React, Node.js, and MongoDB.",
        client: "ShopX",
        price: "$2000",
        status: "Open for proposals",
        image: mobileImg,
      },
      {
        id: "5",
        title: "Company Portfolio Website",
        description:
          "Develop a sleek and responsive website for a corporate client.",
        client: "TechCorp",
        price: "$800",
        status: "Completed",
       // image: logoImg,
      },
    ],

    Finance: [
      {
        id: "6",
        title: "Accounting Dashboard Design",
        description:
          "Design a dashboard to visualize financial data for a fintech startup.",
        client: "MoneyMetrics",
        price: "$1200",
        status: "In Progress",
       // image: financeImg,
      },
    ],

    Music: [
      {
        id: "7",
        title: "Music Streaming App UI",
        description:
          "Design an intuitive UI for a new music streaming application.",
        client: "WaveSounds",
        price: "$900",
        status: "Open for proposals",
       // image: musicImg,
      },
    ],

    Support: [
      {
        id: "8",
        title: "Customer Chatbot System",
        description:
          "Set up a support chatbot with live agent escalation features.",
        client: "HelpDeskPro",
        price: "$1500",
        status: "Open for proposals",
       // image: supportImg,
      },
    ],
  };

  // Flatten all projects into one array
  const allProjects = Object.values(projectsData).flat();

  // Find the selected project by id
  const project = allProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "3rem" }}>
        Project not found.
      </h2>
    );
  }

  const handleSubmit = () => {
    alert(
      `Application submitted!\nName: ${formData.name}\nMessage: ${formData.message}`
    );
    setShowForm(false);
    setFormData({ name: "", message: "" });
  };

  return (
    <section className="project-details">
      <div className="project-card">
        <img src={project.image} alt={project.title} className="project-image" />
        <h1 className="project-title">{project.title}</h1>
        <p className="project-description">{project.description}</p>

        <div className="project-meta">
          <p>
            <strong>Category:</strong>{" "}
            {Object.keys(projectsData).find((cat) =>
              projectsData[cat].some((p) => p.id === project.id)
            )}
          </p>
          <p>
            <strong>Client:</strong> {project.client}
          </p>
          <p>
            <strong>Budget:</strong> {project.price}
          </p>
          <p>
            <strong>Status:</strong> {project.status}
          </p>
        </div>

        <div className="project-actions">
          <button className="btn primary" onClick={() => setShowForm(true)}>
            Apply Now
          </button>
          <button className="btn secondary" onClick={() => navigate(-1)}>
            Back to Results
          </button>
        </div>
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="apply-modal">
            <h2>Apply to {project.title}</h2>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
            <div className="modal-actions">
              <button className="btn primary" onClick={handleSubmit}>
                Submit
              </button>
              <button className="btn secondary" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectDetails;
