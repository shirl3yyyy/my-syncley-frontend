import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Placeholder data (later you’ll fetch this from API)
  const project = {
    id,
    title: `Amazing Project ${id}`,
    description:
      "This is a sample description for the project. It highlights the goals, the process, and the expected outcomes in a clear, professional tone.",
    category: "Design",
    client: "Acme Corp",
    price: "$500",
    status: "Open for proposals",
  };

  return (
    <section className="project-details">
      <div className="project-card">
        <h1 className="project-title">{project.title}</h1>
        <p className="project-description">{project.description}</p>

        <div className="project-meta">
          <p><strong>Category:</strong> {project.category}</p>
          <p><strong>Client:</strong> {project.client}</p>
          <p><strong>Budget:</strong> {project.price}</p>
          <p><strong>Status:</strong> {project.status}</p>
        </div>

        <div className="project-actions">
          <button className="btn primary">Apply Now</button>
          <button className="btn secondary" onClick={() => navigate(-1)}>
            Back to Results
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
