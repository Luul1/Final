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

  return (
    <footer style={footerStyle}>
      <div>
        <h3>Connect with Us</h3>
        <nav>
          <Link to="/" style={{ color: 'white', margin: '0 1rem' }}>Home</Link>
          <Link to="/about" style={{ color: 'white', margin: '0 1rem' }}>About Us</Link>
          <Link to="/contact" style={{ color: 'white', margin: '0 1rem' }}>Contact</Link>
        </nav>
      </div>
      <p>&copy; {new Date().getFullYear()} StaffPesa. All rights reserved.</p>
    </footer>
  );
};

export default Footer; 