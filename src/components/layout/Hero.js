import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../../assets/hero.jpg';
import './Hero.css';

function Hero() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <div className="hero-modern elegant-hero">
      <div className="hero-modern-left">
        <h1>
          Collaborate <span className="gradient-text">Smarter</span>, Achieve Faster
        </h1>
        <p className="subtext">
          From concept to completion, Syncley empowers modern teams to work together seamlessly. Boost productivity and creativity in a single platform.
        </p>

        <form className="hero-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        <button
          className="hero-modern-button primary-btn"
          onClick={() => navigate('/inspiration')}
        >
          Get Started
        </button>
      </div>

      <div className="hero-modern-right">
        <div className="hero-image-wrapper elegant-image">
          <img src={heroImage} alt="Team Collaboration" />
          <div className="hero-overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
