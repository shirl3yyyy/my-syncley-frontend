import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaUsers, FaHandshake, FaClock } from "react-icons/fa";
import "./Stats.css";

function Stats() {
  const stats = [
    { label: "Projects Completed", value: 1200, icon: <FaCheckCircle /> },
    { label: "Active Freelancers", value: 850, icon: <FaUsers /> },
    { label: "Clients Served", value: 400, icon: <FaHandshake /> },
    { label: "Hours Saved", value: 15000, icon: <FaClock /> },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  // Smooth counting animation
  useEffect(() => {
    stats.forEach((_, i) => {
      let start = 0;
      const target = stats[i].value;
      const duration = 1500;
      const startTime = performance.now();

      const animate = (time) => {
        const progress = Math.min((time - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = Math.floor(eased * target);
          return updated;
        });
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });
  }, []);

  // Fade & scale animation on scroll
  useEffect(() => {
    const cards = document.querySelectorAll(".stat-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section className="achievements">
      <h2>Our Impact in Numbers</h2>
      <p className="stats-subtitle">
        Trusted by freelancers and clients worldwide 🚀
      </p>

      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{stat.icon}</div>
            <h3>{counts[index].toLocaleString()}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
