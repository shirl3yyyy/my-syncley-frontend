import React from "react";
import { useNavigate } from 'react-router-dom';
import './CTA.css'

function CTA() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/role-selection");
    };
    return(
        <section className="cta">
            <h2>Ready to get started?</h2>
            <p>Join Syncley today and take your projects to the next level!</p>
            
            <button className="cta-button">Get Started</button>

        </section>
    );
}

export default CTA;