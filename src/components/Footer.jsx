import React from 'react';
import './Footer.css'; // Create specific styles for Footer

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="https://www.instagram.com/yxperiments" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://vimeo.com/yxperiments" target="_blank" rel="noopener noreferrer">Vimeo</a>
          <a href="https://www.linkedin.com/in/yu-xuan-chong/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="footer-copy">
          © {currentYear} Yu Xuan. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;