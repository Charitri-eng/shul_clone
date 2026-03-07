import React from 'react';
import '../styles/Marquee.css';
import { Facebook, Twitter, Linkedin, Phone, Mail } from 'lucide-react';

const Marquee = () => {
  return (
    <div className="top-bar-wrapper">
      <div className="top-bar-container">
        {/* Left Side: Socials */}
        <div className="top-bar-socials">
          <a href="#"><Facebook size={18} fill="currentColor" /></a>
          <a href="#"><Twitter size={18} fill="currentColor" /></a>
          <a href="#"><Linkedin size={18} fill="currentColor" /></a>
        </div>

        {/* Right Side: Contact Details */}
        <div className="top-bar-contact">
          <div className="contact-unit">
            <Phone size={16} strokeWidth={3} />
            <span>+91 - 9307376934</span>
          </div>
          <div className="contact-unit">
            <Mail size={16} strokeWidth={3} />
            <a href="mailto:career@shulventures.com">career@shulventures.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;