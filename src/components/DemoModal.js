import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const DemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending request...' });

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate a successful submission
      const response = await fetch('/api/request-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Demo request sent successfully! We\'ll contact you soon.' });
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setTimeout(() => {
          onClose();
          setStatus({ type: '', message: '' });
        }, 3000);
      } else {
        throw new Error('Failed to send request');
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send request. Please try again.' });
    }
  };

  if (!isOpen) return null;

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  };

  const modalContentStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '1rem',
    width: '90%',
    maxWidth: '500px',
    position: 'relative',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#4b5563',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
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
    minHeight: '100px',
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
    width: '100%',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: '#1e40af',
    },
  };

  const statusStyle = {
    marginTop: '1rem',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
    backgroundColor: status.type === 'error' ? '#fee2e2' : '#dcfce7',
    color: status.type === 'error' ? '#991b1b' : '#166534',
  };

  return (
    <div style={modalStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
        <button style={closeButtonStyle} onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2 style={titleStyle}>Request a Demo</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <textarea
            name="message"
            placeholder="Tell us about your business needs"
            value={formData.message}
            onChange={handleChange}
            style={textareaStyle}
            required
          />
          <button type="submit" style={buttonStyle}>
            {status.type === 'loading' ? 'Sending...' : 'Request Demo'}
          </button>
        </form>
        {status.message && (
          <div style={statusStyle}>
            {status.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoModal; 




