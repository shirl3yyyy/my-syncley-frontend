import React from "react";
import "./CTA.css";
import { FaRocket, FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="cta">
      <div className="cta-content">
        <h2>Ready to Take Your Next Step?</h2>
        <p>
          Whether you're hiring top talent or landing your dream project,
          Syncley makes it happen faster and easier.
        </p>
        <div className="cta-buttons">
          <button
            className="cta-btn primary"
            onClick={() => navigate("/signup-freelancer")}
          >
            <FaUserTie className="btn-icon" /> Hire Talent
          </button>
          <button
            className="cta-btn secondary"
            onClick={() => navigate("/signup-client")}
          >
            <FaRocket className="btn-icon" /> Find Work
          </button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
