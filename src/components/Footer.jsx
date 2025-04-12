import React from 'react';
import './Footer.css'; // Create specific styles for Footer

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="YOUR_INSTAGRAM_LINK" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="YOUR_VIMEO_LINK" target="_blank" rel="noopener noreferrer">Vimeo</a>
          {/* Add other links like LinkedIn, GitHub etc. if needed */}
        </div>
        <div className="footer-copy">
          © {currentYear} Yu Xuan. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;