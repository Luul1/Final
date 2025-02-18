import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  // Inline styles
  const sectionStyle = {
    padding: '6rem 1.5rem',
    backgroundColor: '#f3f4f6', // Light gray background
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    color: '#1d4ed8', // Consistent blue color for titles
  };

  const paragraphStyle = {
    fontSize: '1.25rem',
    marginBottom: '1.5rem',
    color: '#4b5563', // Gray text
  };

  const contactInfoStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem 0',
  };

  const iconStyle = {
    fontSize: '2rem',
    marginRight: '0.5rem',
    color: '#1d4ed8', // Blue color for icons
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Contact Us</h2>
        <p style={paragraphStyle}>
          We would love to hear from you! If you have any questions, comments, or feedback, please feel free to reach out to us.
        </p>
        <p style={paragraphStyle}>
          You can contact us via the following methods:
        </p>
        <div style={contactInfoStyle}>
          <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
          <a href="mailto:support@staffpesa.com" style={{ color: '#1d4ed8' }}>support@staffpesa.com</a>
        </div>
        <div style={contactInfoStyle}>
          <FontAwesomeIcon icon={faWhatsapp} style={iconStyle} />
          <a href="https://wa.me/+254724419991" target="_blank" rel="noopener noreferrer" style={{ color: '#1d4ed8' }}>WhatsApp Us</a>
        </div>
        <div style={contactInfoStyle}>
          <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
          <a href="https://www.linkedin.com/in/lulekala/" target="_blank" rel="noopener noreferrer" style={{ color: '#1d4ed8' }}>LinkedIn</a>
        </div>
        <h3 style={{ marginTop: '2rem', color: '#1d4ed8' }}>Send Us a Message</h3>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
          <input type="text" placeholder="Your Name" style={{ width: '100%', maxWidth: '400px', padding: '1rem', margin: '0.5rem 0', borderRadius: '0.5rem', border: '1px solid #ccc' }} required />
          <input type="email" placeholder="Your Email" style={{ width: '100%', maxWidth: '400px', padding: '1rem', margin: '0.5rem 0', borderRadius: '0.5rem', border: '1px solid #ccc' }} required />
          <textarea placeholder="Your Message" style={{ width: '100%', maxWidth: '400px', height: '100px', padding: '1rem', margin: '0.5rem 0', borderRadius: '0.5rem', border: '1px solid #ccc' }} required></textarea>
          <button type="submit" style={{ padding: '1rem 2rem', borderRadius: '0.5rem', border: 'none', backgroundColor: '#1d4ed8', color: 'white', cursor: 'pointer', marginTop: '1rem' }}>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 