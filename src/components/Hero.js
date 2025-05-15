import React, { useState } from 'react';
import heroImage from '../assets/spesa.jpeg';
import DemoModal from './DemoModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sectionStyle = {
    minHeight: '100vh',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 1rem',
    position: 'relative',
    overflow: 'hidden',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
    zIndex: '3',
  };

  const contentStyle = {
    color: '#ffffff',
    animation: 'fadeInUp 1s ease-out',
    maxWidth: '900px',
    width: '100%',
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
    fontWeight: '800',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    background: 'linear-gradient(45deg, #ffffff, #e5e7eb)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const subtitleStyle = {
    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
    fontWeight: '600',
    marginBottom: '2rem',
    color: '#e5e7eb',
    lineHeight: '1.3',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  };

  const paragraphStyle = {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    lineHeight: '1.6',
    color: '#e5e7eb',
    marginBottom: '1.5rem',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
  };

  const featuresContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center',
    marginBottom: '2rem',
  };

  const featureStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    flex: '1 1 300px',
    maxWidth: '350px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  };

  const featureTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
    color: '#ffffff',
  };

  const featureTextStyle = {
    fontSize: '1rem',
    color: '#e5e7eb',
    lineHeight: '1.5',
  };

  const highlightStyle = {
    color: '#ffffff',
    fontWeight: '600',
    textDecoration: 'none',
    position: 'relative',
    display: 'inline-block',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-2px',
      left: '0',
      width: '100%',
      height: '2px',
      background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
      transform: 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform 0.4s ease-out',
    },
    '&:hover::after': {
      transform: 'scaleX(1)',
    },
  };

  const ctaButtonStyle = {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '0.5rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '2rem',
    '&:hover': {
      backgroundColor: '#2563eb',
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
            
            <div style={featuresContainerStyle}>
              <div style={featureStyle}>
                <h3 style={featureTitleStyle}>Salary Advance</h3>
                <p style={featureTextStyle}>
                  Access up to 50% of your earned salary before payday. Flexible repayment terms and competitive interest rates make it easy to manage unexpected expenses.
                </p>
              </div>
              
              <div style={featureStyle}>
                <h3 style={featureTitleStyle}>Tax Management</h3>
                <p style={featureTextStyle}>
                  Track, calculate, and file taxes seamlessly. Automated tax calculations, real-time updates, and compliance monitoring ensure you stay on top of your tax obligations.
                </p>
              </div>
            </div>

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
