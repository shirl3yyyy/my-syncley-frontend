import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './About.css';
 
 function About() {
    const navigate = useNavigate();

    const handleJoinUs = () => {
        navigate("/role-selection")

    };

  return (
    <section className="about">
        <h2>About Syncley</h2>

        <p className="about-description">
           Syncley is designed to make collaboration between freelancers and clients
        simple, transparent, and effective. With tools for communication,
        project management, and inspiration sharing literally everything you need is in one
        place. 
        </p>

        <div className="about-grid">
            <div className="about-card">
                <h3>Our Mission</h3>
                <p>To empower freelancers and clients to work together seamlessly and achieve their goals.</p>
            </div>

            <div className="about-card">
                <h3>Our Vision</h3>
                <p>To be the leading platform for freelance collaboration, connecting talent with opportunity worldwide.</p>
            </div>

            <div className="about-card">
                <h3>Our Values</h3>
                <p>We believe in transparency, trust, and the power of collaboration to drive success for our users.</p>
            </div>
        </div>

        <button className="about-button" onClick = {handleJoinUs} >Join Us</button>
    </section>
  );
}

export default About;

