import React from "react";
import { useState } from "react";





const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`} >
   
        <div className="container">

          <div className="logo">
        Picture Treasure
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
            <li>
              <a href="">Sign Up</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
    
      </nav>
    </>
  );
};

export default Navbar;
