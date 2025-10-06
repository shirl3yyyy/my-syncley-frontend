import React, { useState } from "react";
import "./PricingPlans.css";
import { FaCheck } from "react-icons/fa";

function PricingPlans() {
  const [showForm, setShowForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

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
      highlight: true,
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

  const handleOpenForm = (plan) => {
    setSelectedPlan(plan);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, plan: selectedPlan.name });
    setShowForm(false);
    setFormData({ name: "", email: "", phone: "", service: "" });
  };

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
            <button
              className="pricing-btn"
              onClick={() => handleOpenForm(plan)}
            >
              {plan.highlight ? "Get Started" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>

      {/* 💬 POPUP FORM */}
      {showForm && (
        <div className="modal-overlay">
          <div className="pricing-modal">
            <button className="close-btn" onClick={() => setShowForm(false)}>
              ✕
            </button>
            <h2>Get Started with {selectedPlan.name}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                pattern="[0-9]{10,15}"
                required
              />

              {/* 🔽 Dropdown */}
              <select
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                required
              >
                <option value="">Select Service</option>
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Writing">Writing</option>
                <option value="Marketing">Marketing</option>
                <option value="Other">Other</option>
              </select>

              <div className="modal-actions">
                <button type="submit" className="btn primary">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn secondary"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default PricingPlans;
