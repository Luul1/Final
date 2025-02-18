import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Inline styles
  const navbarStyle = {
    backgroundColor: 'white', // Set background to white
    padding: '1rem 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#1d4ed8', // Dark blue text for contrast
    position: 'relative',
    flexWrap: 'wrap', // Allow wrapping for mobile responsiveness
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow for depth
  };

  const linkStyle = {
    color: '#1d4ed8', // Dark blue for links
    textDecoration: 'none',
    margin: '0 1rem',
    fontWeight: '500',
    transition: 'color 0.3s',
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  const navLinksContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'flex-end', // Align links to the right
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>StaffPesa</div>
      <div style={navLinksContainerStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About Us</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar; 