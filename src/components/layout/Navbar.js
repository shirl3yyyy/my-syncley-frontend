import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

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

   // Listen for login/logout events
  useEffect(() => {
    const updateAuthStatus = () => setIsLoggedIn(!!localStorage.getItem("token"));
    window.addEventListener("authChange", updateAuthStatus);
    return () => window.removeEventListener("authChange", updateAuthStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("authChange"));
    navigate("/login");
  };

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
          
          {!isLoggedIn ? (
            <>
              <NavLink to="/login" className="st-navbar-link nav-btn" onClick={() => setIsOpen(false)}>Login</NavLink>
              <NavLink to="/signup-client" className="st-navbar-link nav-btn-primary" onClick={() => setIsOpen(false)}>Sign Up</NavLink>
            </>
          ) : (
            <button className="st-navbar-link nav-btn" onClick={handleLogout}>Logout</button>
          )}
        </div>
      </nav>

      <div className={`mobile-overlay ${isOpen ? "active" : ""}`} onClick={toggleMenu}></div>
    </>
  );
}

export default Navbar;
