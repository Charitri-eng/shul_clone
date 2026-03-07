import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.jpg'; 

const Navbar = () => {
  return (
    <nav className="main-navbar">
      <div className="navbar-container">
        {/* Logo Section - Now pinned to far left */}
        <div className="logo-section">
          <a href="#home">
            <img 
              src={logo} 
              alt="Shul Ventures" 
              className="company-logo" 
            />
          </a>
        </div>

        {/* Navigation Links - Now pinned to far right */}
        <ul className="nav-links">
          <li className="active"><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#service">SERVICE</a></li>
          <li><a href="#jobs">JOBS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;