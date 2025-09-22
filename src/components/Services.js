import React from "react";
import './Services.css';
import webDev from "../assets/webDev.jpg";
import vEditing from "../assets/vEditing.jpg";
import gDesign from "../assets/gDesign.jpg";
import dMarket from "../assets/dMarket.jpg";
import contentW from "../assets/contentW.jpg";
import aDesign from "../assets/aDesign.jpg";


function Services() {
  const services = [
    { title: "Web Development", description: "Build responsive websites and web apps.", image: webDev},
    { title: "Graphic Design", description: "Logos, branding, and visual storytelling.", image: gDesign},
    { title: "Content Writing", description: "Engaging blog posts, articles, and copy.", image: contentW},
    { title: "Digital Marketing", description: "SEO, ads, and social media strategy.", image: dMarket},
    { title: "Architectural Design", description: "User-centered interfaces for better experience.", image: aDesign},
    { title: "Video Editing", description: "Professional edits for YouTube & business.", image: vEditing},
  ];

  return (
    <section className="services">
      <h2>Popular Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;


