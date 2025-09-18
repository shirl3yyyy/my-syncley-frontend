import { Link } from "react-router-dom";
import './Navbar.css';// Import CSS file


function Navbar() {
  return (
    <nav className="navbar">
        <div className="title">Syncley</div>
        <div className="links">
        <Link to="/" className="navbar-brand">Home</Link>
        <Link to="/about" className="navbar-brand">Findwork</Link>
        <Link to="/contact" className="navbar-brand">Findfreelancers</Link>
        <Link to="/login" className="navbar-brand">Login</Link>
        <Link to="/signup" className="navbar-brand">Sign Up</Link>
        </div>
    </nav>
  );
}

export default Navbar;