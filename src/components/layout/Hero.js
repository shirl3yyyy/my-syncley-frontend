import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

function Hero() { 
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/signup")
    };

  return (
    <div className="hero">
        <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        >

        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

        <div className="hero-content">
            <h1>Get work Done, Together </h1>
            <p>From concept to completion, Syncley helps teams collaborate smarter, faster, and easier.</p>
            <button className="hero-button" onClick={() => navigate('/signup')}>Get Started</button>

        </div>
    </div>
  );
}

export default Hero;
