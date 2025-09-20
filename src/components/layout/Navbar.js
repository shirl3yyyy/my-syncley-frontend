import { Link } from "react-router-dom";
import { useState } from "react";
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="st-navbar">
      <div className="st-navbar-logo">Syncley</div>

    
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`st-navbar-links ${isOpen ? "active" : ""}`}>
        <Link to="/" className="st-navbar-link" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" className="st-navbar-link" onClick={() => setIsOpen(false)}>Features</Link>
        <Link to="/contact" className="st-navbar-link" onClick={() => setIsOpen(false)}>Boards</Link>
        <Link to="/findfreelancers" className="st-navbar-link" onClick={() => setIsOpen(false)}>Inspiration</Link>
        <Link to="/findwork" className="st-navbar-link" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/login" className="st-navbar-link nav-btn" onClick={() => setIsOpen(false)}>Login</Link>
        <Link to="/signup" className="st-navbar-link nav-btn-primary" onClick={() => setIsOpen(false)}>Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
