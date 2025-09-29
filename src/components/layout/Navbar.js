import { Link } from "react-router-dom";
import { useState } from "react";
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
    <nav className="st-navbar">
      <div className="st-navbar-logo">Syncley</div>

    
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`st-navbar-links ${isOpen ? "active" : ""}`}>
        <Link to="/" className="st-navbar-link" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/features" className="st-navbar-link" onClick={() => setIsOpen(false)}>Why Syncley</Link>
        <Link to="/board" className="st-navbar-link" onClick={() => setIsOpen(false)}>Board</Link>
       {/*S<Link to="/inspiration" className="st-navbar-link" onClick={() => setIsOpen(false)}>Inspiration</Link>*/}
        {/*<Link to="/about" className="st-navbar-link" onClick={() => setIsOpen(false)}>About</Link>*/}
        <Link to="/login" className="st-navbar-link nav-btn" onClick={() => setIsOpen(false)}>Login</Link>
        <Link to="/signup" className="st-navbar-link nav-btn-primary" onClick={() => setIsOpen(false)}>Sign Up</Link>
      </div>
    </nav>

     <div className={`mobile-overlay ${isOpen ? "active" : ""}`} onClick={toggleMenu}></div>
    </>
    
  );
} 

export default Navbar;
