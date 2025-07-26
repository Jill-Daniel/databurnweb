// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './images/databurn logo.jpg';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobile = () => {
    setMobileOpen(prev => !prev);
  };

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <img src={logo} alt="Databurn Logo" />
        </Link>

        <button className="mobile-toggle" onClick={toggleMobile} aria-label="Toggle menu">
          ☰
        </button>

        <ul className={`nav-links ${mobileOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
          <li><Link to="/services" onClick={closeMobileMenu}>Services</Link></li>
          <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>

          <li className={`dropdown ${dropdownOpen ? "open" : ""}`}>
            <span className="dropdown-toggle" onClick={toggleDropdown}>
              Computer School ▾
            </span>
            <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
              <li><Link to="/Aboutschool" onClick={closeMobileMenu}>School Gallery</Link></li>
              <li><Link to="/Aboutstudent" onClick={closeMobileMenu}>About Us</Link></li>
              <li><Link to="/Courses" onClick={closeMobileMenu}>Courses Offered</Link></li>
              <li><Link to="/cert" onClick={closeMobileMenu}>Certifications</Link></li>
              <li><Link to="/Studentportal" onClick={closeMobileMenu}>Student Portal</Link></li>
            </ul>
          </li>

          <li><Link to="/faq" onClick={closeMobileMenu}>FAQ</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
