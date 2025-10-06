import React, { useState } from "react";
import "./Features.css";
import { FaStar } from "react-icons/fa";

function FeaturedFreelancers() {
  const [showForm, setShowForm] = useState(false);
  const [selectedFreelancer, setSelectedFreelancer] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const freelancers = [
    {
      name: "Sarah Johnson",
      role: "UI/UX Designer",
      rating: 4.9,
      skills: ["Figma", "Adobe XD", "Sketch"],
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Lee",
      role: "Full Stack Developer",
      rating: 4.8,
      skills: ["React", "Node.js", "MongoDB"],
      img: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Aisha Khan",
      role: "Content Writer",
      rating: 4.7,
      skills: ["Copywriting", "SEO", "Blogging"],
      img: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
      name: "Daniel Kim",
      role: "Digital Marketer",
      rating: 4.8,
      skills: ["Google Ads", "SEO", "Analytics"],
      img: "https://randomuser.me/api/portraits/men/48.jpg",
    },
  ];

  const openForm = (freelancer) => {
    setSelectedFreelancer(freelancer);
    setShowForm(true);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  return (
    <section className="featured-freelancers">
      <h2>Featured Freelancers</h2>

      <div className="freelancer-grid">
        {freelancers.map((freelancer, index) => (
          <div className="freelancer-card" key={index}>
            <img src={freelancer.img} alt={freelancer.name} />
            <h3>{freelancer.name}</h3>
            <p className="role">{freelancer.role}</p>
            <div className="rating">
              <FaStar className="star" /> {freelancer.rating}
            </div>
            <div className="skills">
              {freelancer.skills.map((skill, i) => (
                <span key={i} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
            <button
              className="hire-btn"
              onClick={() => openForm(freelancer)}
            >
              Hire Now
            </button>
          </div>
        ))}
      </div>

      <button className="view-all-btn">View All Freelancers</button>

      {/* Popup Modal */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-box">
            {!submitted ? (
              <>
                <h2>Hire {selectedFreelancer.name}</h2>
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
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    pattern="[0-9]{10,15}"
                    required
                  />
                  <textarea
                    placeholder="Your message or project details..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows="3"
                  />
                  <div className="modal-actions">
                    <button type="submit" className="btn primary">
                      Send Request
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
              </>
            ) : (
              <div className="success-message">
                ✅ Thank you! Your request has been sent.
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedFreelancers;
