import { Link } from "react-router-dom"; 


function Navbar() {
  return (
    <nav className="navbar">
        <div>Syncley</div>
        <div>
        <Link to="/" className="navbar-brand">Home</Link>
        <Link to="/about" className="navbar-brand">About</Link>
        <Link to="/contact" className="navbar-brand">Contact</Link>
        </div>
    </nav>
  );
}

export default Navbar;