import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ServiceDetail.css";

const exampleProjects = {
  Design: [
    { id: 1, title: "Logo Design for Startup", description: "Create a modern logo." },
    { id: 2, title: "Mobile App UI", description: "Design a clean app interface." },
    { id: 3, title: "Brand Identity", description: "Develop full branding package." },
  ],
  Development: [
    { id: 4, title: "E-commerce Website", description: "Build an online store." },
    { id: 5, title: "React Native App", description: "Cross-platform mobile app." },
    { id: 6, title: "API Development", description: "Create RESTful APIs." },
  ],
  Writing: [
    { id: 7, title: "Blog Posts", description: "Write engaging content." },
    { id: 8, title: "Product Descriptions", description: "SEO optimized descriptions." },
    { id: 9, title: "Translations", description: "Translate documents." },
  ],
  Marketing: [
  { id: 10, title: "Social Media Campaign", description: "Create ads for social platforms." },
  { id: 11, title: "SEO Optimization", description: "Improve website ranking." },
  { id: 12, title: "Email Marketing", description: "Design and execute email campaigns." },
],

"Video & Animation": [
  { id: 13, title: "Explainer Video", description: "Produce a 2-minute explainer." },
  { id: 14, title: "Motion Graphics", description: "Create animated graphics." },
  { id: 15, title: "Video Editing", description: "Edit raw footage into final video." },
],

Business: [
  { id: 16, title: "Business Strategy", description: "Develop growth strategies." },
  { id: 17, title: "Financial Planning", description: "Create detailed financial plans." },
  { id: 18, title: "Market Research", description: "Analyze market trends." },
],

Finance: [
  { id: 19, title: "Accounting Services", description: "Manage company accounts." },
  { id: 20, title: "Investment Advice", description: "Provide investment strategies." },
  { id: 21, title: "Financial Analysis", description: "Analyze business financials." },
],

Support: [
  { id: 22, title: "Customer Service", description: "Handle customer inquiries." },
  { id: 23, title: "Virtual Assistance", description: "Assist with admin tasks." },
  { id: 24, title: "Technical Support", description: "Troubleshoot tech issues." },
],

"Music & Audio": [
  { id: 25, title: "Voiceover Recording", description: "Record professional voiceovers." },
  { id: 26, title: "Sound Design", description: "Create sound effects and mixes." },
  { id: 27, title: "Music Production", description: "Produce original music tracks." },
],

Apps: [
  { id: 28, title: "iOS App Development", description: "Build native iOS apps." },
  { id: 29, title: "Android App Development", description: "Develop Android applications." },
  { id: 30, title: "Cross-Platform Apps", description: "Create apps for multiple platforms." },
],

};

function ServiceDetail() {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const projects = exampleProjects[categoryName] || [];

  return (
    <section className="service-detail">
      <h1>{categoryName} Projects</h1>
      <div className="projects-grid">
        {projects.length === 0 && <p>No projects found for this category.</p>}
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => navigate(`/project/${project.id}`)} // optional: navigate to project details page
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <button className="btn secondary" onClick={() => navigate(-1)}>
        Back to Categories
      </button>
    </section>
  );
}

export default ServiceDetail;
