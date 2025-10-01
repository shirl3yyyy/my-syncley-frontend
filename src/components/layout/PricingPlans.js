import React from "react";
import "./PricingPlans.css";
import { FaCheck } from "react-icons/fa";

function PricingPlans() {
  const plans = [
    {
      name: "Freelancer",
      price: "$0",
      period: "/month",
      description: "Start your freelance journey for free.",
      features: [
        "Create and showcase your profile",
        "Browse job listings",
        "Apply to limited projects",
        "Basic support",
      ],
      highlight: false,
    },
    {
      name: "Client",
      price: "$29",
      period: "/month",
      description: "Hire top talent and manage projects easily.",
      features: [
        "Post unlimited jobs",
        "Message and collaborate with freelancers",
        "Secure payment system",
        "Priority support",
      ],
      highlight: true, // highlight this one
    },
    {
      name: "Team",
      price: "$99",
      period: "/month",
      description: "For agencies and businesses managing teams.",
      features: [
        "Manage multiple freelancers",
        "Team collaboration dashboard",
        "Custom onboarding",
        "Dedicated account manager",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="pricing">
      <h2>Pricing Plans</h2>
      <p className="pricing-subtitle">
        Flexible options for freelancers, clients, and teams.
      </p>
      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
          >
            <h3>{plan.name}</h3>
            <p className="price">
              {plan.price}
              <span>{plan.period}</span>
            </p>
            <p className="description">{plan.description}</p>
            <ul className="features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <FaCheck className="check-icon" /> {feature}
                </li>
              ))}
            </ul>
            <button className="pricing-btn">
              {plan.highlight ? "Get Started" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingPlans;
