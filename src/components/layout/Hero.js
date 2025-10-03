import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, Laptop } from "lucide-react"; 
import heroImg from "../../assets/hero.jpg"; 
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-modern">
      {/* LEFT SIDE */}
      <div className="hero-modern-left">
        <h1>
          Find <span className="gradient-text">Top Talent</span> & Build Your Dream Project
        </h1>
        <p className="subtext">
          Whether you’re a client searching for skilled freelancers or a freelancer 
          looking for exciting projects — we’ve got you covered.
        </p>

        {/* CTA BUTTONS */}
        <div className="hero-buttons">
          <button
            className="hero-btn client-btn"
            onClick={() => navigate("/signup-client")}
          >
            <Briefcase size={20} className="btn-icon" />
            Join as Client
          </button>

          <button
            className="hero-btn freelancer-btn"
            onClick={() => navigate("/signup-freelancer")}
          >
            <Laptop size={20} className="btn-icon" />
            Join as Freelancer
          </button>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hero-modern-right">
        <div className="hero-image-wrapper">
          <img src={heroImg} alt="Collaboration workspace" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
