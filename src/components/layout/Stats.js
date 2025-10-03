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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= stats.length) return;

    let progress = 0;
    const target = stats[currentIndex].value;
    const step = Math.ceil(target / 80); // speed of animation

    const interval = setInterval(() => {
      progress += step;
      if (progress >= target) {
        progress = target;
        clearInterval(interval);
        setCurrentIndex((prev) => prev + 1); // move to next stat
      }
      setCounts((prev) => {
        const updated = [...prev];
        updated[currentIndex] = progress;
        return updated;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [currentIndex, stats]);

  return (
    <section className="achievements">
      <h2>Our Impact in Numbers</h2>
      <p className="stats-subtitle">Trusted by freelancers and clients worldwide 🚀</p>

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
