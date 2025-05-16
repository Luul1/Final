import React, { useState } from 'react';
import DemoModal from './DemoModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sectionStyle = {
    minHeight: '100vh',
    background: '#ffffff',
    display: 'flex',
    alignItems: 'flex-start',
    padding: '7rem 2rem 2rem',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
      zIndex: 1,
    },
  };

  const containerStyle = {
    maxWidth: '1400px',
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '4rem',
    position: 'relative',
    zIndex: 2,
    paddingTop: '2rem',
  };

  const contentStyle = {
    flex: '1',
    textAlign: 'left',
    animation: 'fadeInUp 1s ease-out',
    paddingTop: '0',
    maxWidth: '600px',
  };

  const imageContainerStyle = {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    padding: '0 0 2rem 2rem',
    marginTop: '0',
    marginBottom: '4rem',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '2rem',
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
    transform: 'perspective(1000px) rotateY(-5deg)',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    objectFit: 'cover',
    border: '4px solid rgba(255, 255, 255, 0.1)',
    '&:hover': {
      transform: 'perspective(1000px) rotateY(0deg) scale(1.02)',
      boxShadow: '0 40px 80px rgba(0, 0, 0, 0.5)',
      border: '4px solid rgba(255, 255, 255, 0.2)',
    },
  };

  const imagePlaceholderStyle = {
    width: '100%',
    maxWidth: '500px',
    height: '400px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: '1.2rem',
    backdropFilter: 'blur(10px)',
    border: '2px dashed rgba(255, 255, 255, 0.3)',
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 4vw, 4.5rem)',
    fontWeight: '800',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#9370DB',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const subtitleStyle = {
    fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
    fontWeight: '600',
    marginBottom: '2rem',
    color: '#4169E1',
    lineHeight: '1.3',
  };

  const paragraphStyle = {
    fontSize: 'clamp(1.1rem, 1.5vw, 1.25rem)',
    lineHeight: '1.8',
    color: '#333333',
    marginBottom: '2rem',
  };

  const featuresContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginBottom: '2rem',
  };

  const featureStyle = {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    padding: '1.5rem',
    borderRadius: '1rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
    },
  };

  const featureTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
    color: '#FFD700',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const featureTextStyle = {
    fontSize: '1rem',
    color: '#ffffff',
    lineHeight: '1.6',
  };

  const highlightStyle = {
    color: '#9370DB',
    fontWeight: '600',
    textDecoration: 'none',
    position: 'relative',
    display: 'inline-block',
  };

  const ctaButtonStyle = {
    background: 'linear-gradient(45deg, #4169E1, #9370DB)',
    color: '#ffffff',
    padding: '1rem 2.5rem',
    borderRadius: '1rem',
    fontSize: '1.1rem',
    fontWeight: '700',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '1.5rem',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
      background: 'linear-gradient(45deg, #9370DB, #4169E1)',
    },
  };

  return (
    <>
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div style={contentStyle}>
            <h1 style={titleStyle}>Transform Your HR Management with Staffma</h1>
            <h2 style={subtitleStyle}>Revolutionizing HR Management for African SMEs</h2>
            <p style={paragraphStyle}>
              Staffma is a comprehensive HR management system designed specifically for African SMEs, combining essential HR functions with innovative financial services. Our platform streamlines employee management, automates payroll processes, and empowers your workforce with modern financial tools.
            </p>

            <p style={paragraphStyle}>
              Join over <span style={highlightStyle}>1,000+ businesses</span> that have transformed their HR operations with our innovative platform.
            </p>
            <button 
              style={ctaButtonStyle}
              onClick={() => setIsModalOpen(true)}
            >
              Request a Demo
            </button>
          </div>
          <div style={imageContainerStyle}>
            <img 
              src="/Hr.jpg" 
              alt="StaffMa HR Management Platform" 
              style={imageStyle}
            />
          </div>
        </div>
      </section>
      <DemoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Hero;
