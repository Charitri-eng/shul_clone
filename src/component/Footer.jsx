import React from 'react';
import '../styles/Footer.css';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-site">
      <div className="footer-top">
        <div className="footer-grid">
          
          {/* Column 1: About */}
          <div className="footer-column">
            <h3 className="footer-heading">About Us</h3>
            <p className="footer-text">
              Shul Ventures Pvt. Ltd. is a team of skilled and experienced workforce in respective domain. 
              We render high quality results with descent techniques.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-column">
            <h3 className="footer-heading">Navigation</h3>
            <ul className="footer-list">
              <li><ChevronRight size={14} className="cyan-icon"/><a href="#">Home</a></li>
              <li><ChevronRight size={14} className="cyan-icon"/><a href="#">About</a></li>
              <li><ChevronRight size={14} className="cyan-icon"/><a href="#">Service</a></li>
              <li><ChevronRight size={14} className="cyan-icon"/><a href="#">Jobs</a></li>
              <li><ChevronRight size={14} className="cyan-icon"/><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-column">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-list">
              <li><ChevronRight size={14} className="cyan-icon"/><a href="#">Training & Development</a></li>
              <li><ChevronRight size={14} className="cyan-icon"/><a href="#">Fabrication</a></li>
              <li><ChevronRight size={14} className="cyan-icon"/><a href="#">Pest Control</a></li>
              <li><ChevronRight size={14} className="cyan-icon"/><a href="#">Housekeeping</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-column">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="footer-contact">
              <div className="contact-line">
                <MapPin size={16} className="cyan-icon" />
                <span>Pune, Maharashtra</span>
              </div>
              <div className="contact-line">
                <Phone size={16} className="cyan-icon" />
                <span>+91 - 9307376934</span>
              </div>
              <div className="contact-line">
                <Mail size={16} className="cyan-icon" />
                <span>career@shulventures.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright and Socials */}
      <div className="footer-bottom-bar">
        <div className="bottom-container">
          <p className="copyright-text">
            Copyright © {new Date().getFullYear()} All rights reserved | Shul Ventures Pvt. Ltd.
          </p>
          <div className="footer-social-icons">
            <a href="#" className="social-link"><Facebook size={18} /></a>
            <a href="#" className="social-link"><Twitter size={18} /></a>
            <a href="#" className="social-link"><Linkedin size={18} /></a>
            <a href="#" className="social-link"><Instagram size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;