import React from "react";
import './HowItWorks.css';
import { FaUserPlus, FaIdBadge, FaSearch, FaComment, FaCheckCircle } from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      icon: <FaUserPlus />,
      title: "Create an Account",
      description: "Sign up as a freelancer or client to get started."
    },
    {
      icon: <FaIdBadge />,
      title: "Set Up Your Profile",
      description: "Complete your profile to showcase your skills and experience."
    },
    {
      icon: <FaSearch />,
      title: "Find Work or Talent",
      description: "Browse projects or freelancers to find the perfect match for your needs."
    },
    {
      icon: <FaComment />,
      title: "Collaborate",
      description: "Use our tools to communicate, manage projects, and share inspiration."
    },
    {
      icon: <FaCheckCircle />,
      title: "Complete the Project",
      description: "Work together to complete the project and achieve your goals."
    }
  ];

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-grid">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
