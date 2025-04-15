import React, { useState } from 'react';
import './Navbar.css'; // We will update this file next

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home'); // Keep track of active link

  // Smooth scroll logic (adjusted for potentially fixed navbar height)
  const handleLinkClick = (linkId) => {
    console.log('Clicked link ID:', linkId);
    setActiveLink(linkId);
    const section = document.getElementById(linkId);
    console.log('Clicked link ID:', linkId);

    if (section) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 50; // Get navbar height dynamically or use default
      const elementPosition = section.getBoundingClientRect().top; // Position relative to viewport
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight/2; // Adjust for navbar height

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (linkId === 'home') {
      // Scroll to top if home is clicked
      console.log('Scrolling to top');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      console.log('Section not found or ID is home, but element not found');
    }
  };

  // Define links for left and right sides
  // Adjust these based on which sections you want on which side
  const leftLinks = [
    { id: 'skills', label: 'SKILLS' },
    { id: 'bullet', label: '•' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'bullet', label: '•' },
    { id: 'experiments', label: 'EXPERIMENTS' },
  ];

  return (
    <nav className="navbar">
      <div className='nav-wrapper'>
      <a
          href="#home"
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
        >
          {/* Replace with your actual logo text or an <img> tag */}
          Yu Xuan
        </a>
      <div className="nav-container">
        
        {/* Left side links */}
        <ul className="nav-menu">
          {leftLinks.map(link => (
            <li key={link.id} className={`nav-link`}>
              <a
                href={`#${link.id}`}
                className={`nav-link ${activeLink === link.id ? 'active' : ''} ${link.id}`}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor jump
                  handleLinkClick(link.id);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      
        <div className='button-wrapper'>
          <button className='button-arrow' onClick={(e) => {
            e.preventDefault();
            handleLinkClick('contact');
          }}>
            Contact Me
            <div className="arrow-wrapper">
                <div className="arrow"></div>

              </div>
          </button>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;