import { FaUserPlus, FaClipboardList, FaUsers } from "react-icons/fa";
import "./HowItWorks.css";

function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: <FaUserPlus />,
      title: "Sign Up",
      description: "Create your free Syncley account in seconds and get started instantly."
    },
    {
      number: "2",
      icon: <FaClipboardList />,
      title: "Create Your Board",
      description: "Organize your tasks, projects, or ideas in one simple dashboard."
    },
    {
      number: "3",
      icon: <FaUsers />,
      title: "Collaborate",
      description: "Invite your team and work together in real-time to achieve goals faster."
    }
  ];

  return (
    <section className="howitworks">
      <h2>How Syncley Works</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-badge">{step.number}</div>
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
