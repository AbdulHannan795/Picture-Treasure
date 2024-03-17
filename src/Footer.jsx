import React from 'react';

const Footer = () => {
  return (
 <>
  <footer className="footer-container">
      {/* Column 1: Content */}
      <div className="footer-column">
        <h3>Content</h3>
        <ul>
          <li>Logo</li>
          <li>Social media icons</li>
          <li>Web icons</li>
        </ul>
      </div>

      {/* Column 2: Contact */}
      <div className="footer-column">
        <h3>Contact</h3>
        <ul>
          <li>Contact Us</li>
          <li>Support</li>
          <li>FAQ</li>
      
        </ul>
      </div>

      {/* Column 3: Social Media */}
      <div className="footer-column">
        <h3>Social Media</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        
        </ul>
      </div>
            {/* Column 4: New Column */}
            <div className="footer-column">
        <h3>Company</h3>
        <ul>
          <li>Contact us</li>
          <li>About us</li>
          <li>Blogs</li>
      
        </ul>
      </div>
            {/* Copyright Message */}
            <div className="copyright">
        <hr /> 
        <p>&copy; 2023 Picture Treasure. All rights reserved.</p>
      </div>
    </footer>
 </>
  );
};

export default Footer;
