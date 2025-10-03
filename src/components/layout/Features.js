import React from "react";
import "./Features.css";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function FeaturedFreelancers() {

  const navigate = useNavigate();
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
            {/* Hire Now Button */}
            <button className="hire-btn">Hire Now</button>
          </div>
        ))}
      </div>
      <button className="view-all-btn">View All Freelancers</button>
    </section>
  );
}

export default FeaturedFreelancers;
