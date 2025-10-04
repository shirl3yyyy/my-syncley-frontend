import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-column">
          <h4>About Syncley</h4>
          <p>Syncley is a collaboration platform for freelancers and clients. Manage projects, chat in real-time, and stay productive together.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/board">Collab Board</Link></li>
            {/* Update or remove these based on your routes */}
            {/* <li><Link to="/projects">Projects</Link></li> */}
            {/* <li><Link to="/contact">Contact</Link></li> */}
          </ul>
        </div>

        {/* Support */}
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            
            <li><Link to="/faq">FAQ</Link></li> 
            <li><Link to="/terms">Terms & Conditions</Link></li> 
             <li><Link to="/privacy">Privacy Policy</Link></li> 
          </ul>
        </div>

        {/* Social */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com/yourpage" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com/yourpage" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com/company/yourpage" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://instagram.com/yourpage" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Syncley. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
