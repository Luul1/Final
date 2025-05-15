import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const sectionStyle = {
    padding: '6rem 1.5rem',
    backgroundColor: '#f3f4f6',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
  };

  const contactInfoStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    color: '#1d4ed8',
  };

  const infoItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
    color: '#4b5563',
  };

  const iconStyle = {
    fontSize: '1.5rem',
    marginRight: '1rem',
    color: '#1d4ed8',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    borderRadius: '0.5rem',
    border: '1px solid #e5e7eb',
    fontSize: '1rem',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '150px',
    resize: 'vertical',
  };

  const buttonStyle = {
    backgroundColor: '#1d4ed8',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: '#1e40af',
    },
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={contactInfoStyle}>
          <h2 style={titleStyle}>Contact Us</h2>
          <div style={infoItemStyle}>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} />
            <div>
              <strong>Head Office</strong>
              <p>Staffma Limited<br />123 Innovation Way<br />Nairobi, Kenya</p>
            </div>
          </div>
          <div style={infoItemStyle}>
            <FontAwesomeIcon icon={faPhone} style={iconStyle} />
            <div>
              <strong>Phone</strong>
              <p>+254 700 123 456</p>
            </div>
          </div>
          <div style={infoItemStyle}>
            <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
            <div>
              <strong>Email</strong>
              <p>info@staffma.co.ke<br />support@staffma.co.ke</p>
            </div>
          </div>
          <div style={infoItemStyle}>
            <FontAwesomeIcon icon={faWhatsapp} style={iconStyle} />
            <a href="https://wa.me/+254724419991" target="_blank" rel="noopener noreferrer" style={{ color: '#4b5563' }}>
              WhatsApp Us
            </a>
          </div>
          <div style={infoItemStyle}>
            <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
            <a href="https://www.linkedin.com/in/lulekala/" target="_blank" rel="noopener noreferrer" style={{ color: '#4b5563' }}>
              LinkedIn
            </a>
          </div>
        </div>

        <div style={formStyle}>
          <h2 style={titleStyle}>Request a Demo</h2>
          <p style={{ marginBottom: '2rem', color: '#4b5563' }}>
            Experience the power of Staffma firsthand with a personalized demo. Our team will walk you through the platform, highlighting the features that are most relevant to your business.
          </p>
          <form>
            <input type="text" placeholder="Your Name" style={inputStyle} required />
            <input type="email" placeholder="Your Email" style={inputStyle} required />
            <input type="tel" placeholder="Your Phone Number" style={inputStyle} required />
            <input type="text" placeholder="Company Name" style={inputStyle} required />
            <textarea placeholder="Tell us about your business needs" style={textareaStyle} required></textarea>
            <button type="submit" style={buttonStyle}>Request Demo</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 