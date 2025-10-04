import { FaUserPlus, FaClipboardList, FaUsers } from "react-icons/fa";
import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: <FaUserPlus aria-hidden="true" />,
      title: "Sign Up",
      description: "Create your free Syncley account in seconds and start managing your work effortlessly."
    },
    {
      number: "2",
      icon: <FaClipboardList aria-hidden="true" />,
      title: "Create Your Board",
      description: "Organize your tasks, projects, or ideas visually using simple, intuitive boards."
    },
    {
      number: "3",
      icon: <FaUsers aria-hidden="true" />,
      title: "Collaborate",
      description: "Invite your team and work together in real-time to reach goals faster."
    }
  ];

  return (
    <section className="howitworks" aria-labelledby="howitworks-title">
      <div className="container">
        <h2 id="howitworks-title">How Syncley Works</h2>
        <p className="subtitle">A simple 3-step process to transform your productivity.</p>
        <ol className="steps" role="list" aria-label="Steps to use the Syncley platform">
          {steps.map((step, index) => (
            <li className="step-card" key={index} aria-describedby={`step-desc-${index}`}>
              <div className="step-header">
                <div className="step-badge" aria-hidden="true">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
              </div>
              <h3>{step.title}</h3>
              <p id={`step-desc-${index}`}>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default HowItWorks;
