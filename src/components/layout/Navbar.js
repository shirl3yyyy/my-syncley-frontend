import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`st-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="st-navbar-logo">Syncley</div>

        <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`st-navbar-links ${isOpen ? "active" : ""}`}>
          <NavLink to="/" className="st-navbar-link" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/howitworks" className="st-navbar-link" onClick={() => setIsOpen(false)}>How It Works</NavLink>
          <NavLink to="/board" className="st-navbar-link" onClick={() => setIsOpen(false)}>Board</NavLink>
          <NavLink to="/login" className="st-navbar-link nav-btn" onClick={() => setIsOpen(false)}>Login</NavLink>
          <NavLink to="/signup" className="st-navbar-link nav-btn-primary" onClick={() => setIsOpen(false)}>Sign Up</NavLink>
        </div>
      </nav>

      <div className={`mobile-overlay ${isOpen ? "active" : ""}`} onClick={toggleMenu}></div>
    </>
  );
}

export default Navbar;
