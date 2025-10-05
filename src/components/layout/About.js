import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import { FaHandshake, FaRocket, FaUsers, FaGlobe } from 'react-icons/fa';

function About() {
  const navigate = useNavigate();

  return (
    <section className="about">
      <div className="about-hero">
        <h2>Welcome to Syncley</h2>
        <p className="about-description">
          Syncley connects ambitious freelancers with visionary clients to collaborate and build meaningful projects — all in one intuitive platform.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <FaRocket className="about-icon" />
          <h3>Our Mission</h3>
          <p>To launch productive partnerships by making remote collaboration seamless, secure, and smart.</p>
        </div>

        <div className="about-card">
          <FaHandshake className="about-icon" />
          <h3>Our Values</h3>
          <p>Trust, transparency, and teamwork are the foundations of everything we build at Syncley.</p>
        </div>

        <div className="about-card">
          <FaUsers className="about-icon" />
          <h3>Community</h3>
          <p>We empower global creators and clients, building a thriving, diverse ecosystem where ideas can grow.</p>
        </div>

        <div className="about-card">
          <FaGlobe className="about-icon" />
          <h3>Global Reach</h3>
          <p>Syncley bridges borders, enabling you to work with the best talent or clients — anywhere in the world.</p>
        </div>
      </div>

      <div className="about-cta">
        <h3>Join the Future of Work</h3>
        <p>Choose your path. Whether you're here to hire or be hired — Syncley is your space to shine.</p>
        <button className="about-button" onClick={() => navigate("/signup-client")}>
          Get Started
        </button>
      </div>
    </section>
  );
}

export default About;
