import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Footer = () => {
  // Inline styles
  const footerStyle = {
    backgroundColor: '#1d4ed8', // Blue background
    color: 'white',
    padding: '2rem 0',
    textAlign: 'center',
  };

  const linkStyle = {
    color: '#fbbf24', // Yellow color for links
    textDecoration: 'none',
    margin: '0 1rem',
  };

  const navStyle = {
    marginBottom: '1rem',
  };

  const linkContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  };

  return (
    <footer style={footerStyle}>
      <div>
        <h3>Connect with StaffMa</h3>
        <nav style={navStyle}>
          <div style={linkContainerStyle}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link>
            <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
            <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
          </div>
        </nav>
      </div>
      <p>&copy; {new Date().getFullYear()} StaffMa. All rights reserved.</p>
    </footer>
  );
};

export default Footer; 