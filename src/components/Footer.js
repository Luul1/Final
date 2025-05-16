import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Footer = () => {
  // Inline styles
  const footerStyle = {
    background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
    color: '#ffffff',
    padding: '3rem 0',
    textAlign: 'center',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #4169E1, #9370DB)',
    },
  };

  const linkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    margin: '0 1rem',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#9370DB',
    },
  };

  const navStyle = {
    marginBottom: '1.5rem',
  };

  const linkContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  };

  return (
    <footer style={footerStyle}>
      <div>
        <h3 style={{ color: '#9370DB', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Connect with StaffMa</h3>
        <nav style={navStyle}>
          <div style={linkContainerStyle}>
            <Link to="/" style={{ color: '#ffffff', textDecoration: 'none', transition: 'color 0.3s ease', '&:hover': { color: '#9370DB' } }}>Home</Link>
            <Link to="/about" style={{ color: '#ffffff', textDecoration: 'none', transition: 'color 0.3s ease', '&:hover': { color: '#9370DB' } }}>About</Link>
            <Link to="/features" style={{ color: '#ffffff', textDecoration: 'none', transition: 'color 0.3s ease', '&:hover': { color: '#9370DB' } }}>Features</Link>
            <Link to="/contact" style={{ color: '#ffffff', textDecoration: 'none', transition: 'color 0.3s ease', '&:hover': { color: '#9370DB' } }}>Contact</Link>
          </div>
        </nav>
      </div>
      <p style={{ color: '#a0a0a0', marginTop: '1.5rem' }}>&copy; {new Date().getFullYear()} StaffMa. All rights reserved.</p>
    </footer>
  );
};

export default Footer; 