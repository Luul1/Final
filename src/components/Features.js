import React from 'react';
import hrImage from '../assets/biometric.jpeg';
import salaryAdvanceImage from '../assets/cardImage.jpeg';
import mobileAppImage from '../assets/spesa.jpeg';
import digitalManagementImage from '../assets/employee.jpeg';
import payrollImage from '../assets/payroll.jpeg';
import performanceImage from '../assets/Performance.png';
import mobileMoneyImage from '../assets/transferImage.webp';
import qrCodeImage from '../assets/Qr-code.jpeg';
import savingsImage from '../assets/savingsImage.avif';
import internationalImage from '../assets/Wire-Transfers.jpg';
import virtualCardImage from '../assets/cardImage.jpeg';
import billPaymentImage from '../assets/Bill-payments.png';

const Features = () => {
  const sectionStyle = {
    padding: '6rem 1rem',
    backgroundColor: '#f8fafc',
    position: 'relative',
    overflow: 'hidden',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '4rem',
  };

  const titleStyle = {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: '800',
    color: '#1e293b',
    marginBottom: '1rem',
    position: 'relative',
    display: 'inline-block',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-0.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '3px',
      background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
      borderRadius: '2px',
    },
  };

  const subtitleStyle = {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    color: '#64748b',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '0.5rem',
    marginBottom: '1.5rem',
  };

  const iconStyle = {
    fontSize: '2.5rem',
    color: '#3b82f6',
    marginBottom: '1.5rem',
  };

  const cardTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '1rem',
  };

  const cardTextStyle = {
    fontSize: '1rem',
    color: '#64748b',
    lineHeight: '1.6',
  };

  const features = [
    {
      title: 'Digital Employee Management',
      description: 'StaffMa provides secure cloud-based storage for all employee documents, streamlined onboarding, and efficient document management for African SMEs.',
      icon: '📄',
      image: digitalManagementImage,
    },
    {
      title: 'Automated Payroll Processing',
      description: 'StaffMa offers error-free salary calculations and disbursements with intelligent tax calculations and bulk payment processing through StaffPesa integration.',
      icon: '💰',
      image: payrollImage,
    },
    {
      title: 'Performance Review System',
      description: 'Track employee growth with StaffMa\'s structured evaluation and skills development system, featuring AI-powered gap analysis and progress tracking.',
      icon: '📊',
      image: performanceImage,
    },
    {
      title: 'StaffPesa Mobile App',
      description: 'StaffMa\'s flagship financial service, StaffPesa, provides direct salary deposits, digital wallet features, and comprehensive financial management for employees.',
      icon: '📱',
      image: mobileAppImage,
    },
    {
      title: 'Integrated Financial Services',
      description: 'StaffMa combines HR management with StaffPesa\'s financial ecosystem, offering seamless salary deposits, mobile transfers, and employee financial tools.',
      icon: '💳',
      image: salaryAdvanceImage,
    },
    {
      title: 'Enterprise Security',
      description: 'StaffMa ensures bank-grade encryption and strict access controls to protect sensitive employee and financial information across all services.',
      icon: '🔒',
      image: hrImage,
    },
  ];

  const financialServices = [
    {
      title: 'Direct Salary Deposits',
      description: 'StaffPesa enables instant salary deposits directly to employee accounts with real-time notifications and transaction tracking.',
      icon: '📲',
      image: mobileMoneyImage,
    },
    {
      title: 'QR Code Payments',
      description: 'Make secure payments at merchant locations using StaffPesa\'s QR code system for convenient transactions.',
      icon: '📱',
      image: qrCodeImage,
    },
    {
      title: 'Smart Savings',
      description: 'StaffPesa offers automated savings features with customizable goals and secure lock mechanisms for employee financial planning.',
      icon: '🔐',
      image: savingsImage,
    },
    {
      title: 'International Transfers',
      description: 'Send money globally through StaffPesa at competitive rates with our secure international transfer service.',
      icon: '🌍',
      image: internationalImage,
    },
    {
      title: 'Virtual Cards',
      description: 'Generate secure virtual cards through StaffPesa for online shopping and digital transactions.',
      icon: '💳',
      image: virtualCardImage,
    },
    {
      title: 'Bill Payments',
      description: 'Pay utility bills and subscriptions directly from StaffPesa with automated payment scheduling.',
      icon: '📝',
      image: billPaymentImage,
    },
  ];

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>What We Offer</h2>
          <p style={subtitleStyle}>
            Discover how StaffMa transforms HR management and employee financial services through StaffPesa
          </p>
        </div>
        <div style={gridStyle}>
          {features.map((feature, index) => (
            <div key={index} style={cardStyle}>
              <img src={feature.image} alt={feature.title} style={imageStyle} />
              <div style={iconStyle}>{feature.icon}</div>
              <h3 style={cardTitleStyle}>{feature.title}</h3>
              <p style={cardTextStyle}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '6rem' }}>
          <h2 style={{ ...titleStyle, textAlign: 'center' }}>StaffPesa Financial Services</h2>
          <p style={{ ...subtitleStyle, marginBottom: '3rem' }}>
            Comprehensive financial solutions powered by StaffMa for your employees
          </p>
          <div style={gridStyle}>
            {financialServices.map((service, index) => (
              <div key={index} style={cardStyle}>
                <img src={service.image} alt={service.title} style={imageStyle} />
                <div style={iconStyle}>{service.icon}</div>
                <h3 style={cardTitleStyle}>{service.title}</h3>
                <p style={cardTextStyle}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
