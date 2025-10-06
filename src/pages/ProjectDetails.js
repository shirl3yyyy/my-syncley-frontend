import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  // Placeholder project data
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

  const handleSubmit = () => {
    alert(`Application submitted!\nName: ${formData.name}\nMessage: ${formData.message}`);
    setShowForm(false);
    setFormData({ name: "", message: "" });
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
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
