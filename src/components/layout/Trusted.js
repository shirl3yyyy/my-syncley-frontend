import React from "react";
import './Trusted.css'

const logos = [
  '/logos/google.svg',
  '/logos/microsoft.svg',
  '/logos/airbnb.svg',
  '/logos/spotify.svg',
];

function Trusted() {
  return (
    <section className="trusted-by">
      <p className="trusted-text">Trusted by leading companies</p>
      <div className="trusted-logos">
        {logos.map((logo, index) => (
          <div className="trusted-logo-card" key={index}>
            <img src={logo} alt={`logo ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trusted;
