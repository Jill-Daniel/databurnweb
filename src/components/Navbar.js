// // import React from "react";
// import logo from './images/databurn logo.jpg';

// function Navbar() {
//   return (

    
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="logo">
//           <img src={logo} alt="Databurn Logo" />
//         </div>
  
//         <ul className="nav-links">
//           <li><a href="/">Home</a></li>
//           <li><a href="#services">More</a></li>
//           <li><a href="../src/component/pages/contact">Contact</a></li>
//           <li className="dropdown">
//             <span className="dropdown-toggle">Services ▾</span>
//             <ul className="dropdown-menu">
//               <li><a href="../src/components/services">Livestreaming</a></li>
//               <li><a href="../src/components/services">Wedding photos</a></li>
//               <li><a href="../src/components/services">Babybum Shoot</a></li>


//               <li><a href="../src/components/services">Learning Photography</a></li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



















































































































import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './images/databurn logo.jpg';


function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
    setDropdownOpen(false); // close dropdown if mobile menu toggled
  };

  // Close menus on link click (optional but recommended)
  const closeMenus = () => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" onClick={closeMenus}>
            <img src={logo} alt="Databurn Logo" />
          </Link>
        </div>

        {/* Hamburger icon for mobile */}
        <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
          ☰
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <li><Link to="/Home" onClick={closeMenus}>Home</Link></li>
          <li><Link to="/About" onClick={closeMenus}>About</Link></li>
          <li><Link to="/services" onClick={closeMenus}>More</Link></li>
          <li><Link to="/contact" onClick={closeMenus}>Contact</Link></li>
           <li><Link to="/services" onClick={closeMenus}>Services</Link></li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


