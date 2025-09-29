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

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) =>
          Math.min(count + Math.ceil(stats[i].value / 100), stats[i].value)
        )
      );
    }, 30);

    return () => clearInterval(interval);
  }, [stats]);

  return (
    <section className="achievements">
      <h2>Our Impact in Numbers</h2>
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
