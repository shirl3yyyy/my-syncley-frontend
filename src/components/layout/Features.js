import React from 'react';
import './Features.css';


function Features() {
  const features = [
    "Seamless Collaboration",
    "Real-Time Updates",
    "Customizable Workflows",
    "Secure & Reliable",
  ];

  return (
    <div className="why-choose-us">
      {/* Left: Text */}
      <div className="why-left">
        <h2>Why Choose Syncley?</h2>
        <p>
          We provide a modern platform that helps teams collaborate efficiently, stay organized, and deliver projects faster.
        </p>
        <ul>
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Right: Video */}
      <div className="why-right">
        <video
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
}

export default Features;
