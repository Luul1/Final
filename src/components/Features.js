import React from 'react';
import salaryImage from '../assets/salaryImage.jpeg'; // Replace with your actual image paths
import walletImage from '../assets/walletImage.webp';
import transferImage from '../assets/transferImage.webp';
import cardImage from '../assets/cardImage.jpeg';
import savingsImage from '../assets/savingsImage.avif';
import facialRecognitionImage from '../assets/facial-recognition.jpeg';
import biometricImage from '../assets/biometric.jpeg';
import securityImage from '../assets/securityImage.jpeg';

const Features = () => {
  // Inline styles
  const sectionStyle = {
    padding: '6rem 1.5rem',
    backgroundColor: '#f3f4f6', // Light gray background
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#1d4ed8', // Blue color for titles
  };

  const featuresStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // Increased min width for cards
    gap: '2rem',
  };

  const featureCardStyle = {
    backgroundColor: 'white', // Changed to white background for feature cards
    padding: '1.5rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  };

  const featureTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    margin: '1rem 0 0.5rem',
    color: '#1d4ed8', // Consistent blue color for titles
  };

  const featureDescriptionStyle = {
    fontSize: '1rem',
    color: '#4b5563', // Gray text
    marginBottom: '1rem', // Space below description
  };

  const imageStyle = {
    width: '100%', // Make the image fit the container
    height: 'auto', // Maintain aspect ratio
    borderRadius: '0.5rem', // Match the card's border radius
    marginBottom: '1rem', // Space between image and text
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Core Features</h2>
        <div style={featuresStyle}>
          {[
            { 
              title: 'Direct Salary Payments', 
              description: 'Automated payroll disbursement from StaffMa directly to employees, ensuring timely payments. This feature simplifies the payroll process for employers and guarantees that employees receive their salaries on time.', 
              image: salaryImage 
            },
            { 
              title: 'Digital Wallet', 
              description: 'Manage your finances with a personal digital wallet and QR code payments for convenience. This allows users to store money digitally and make quick transactions without cash.', 
              image: walletImage 
            },
            { 
              title: 'Money Transfers', 
              description: 'Send money easily to phone numbers and bank accounts with just a few taps, making transactions seamless. This feature is perfect for users who need to transfer funds quickly and securely.', 
              image: transferImage 
            },
            { 
              title: 'Virtual Card Management', 
              description: 'Create and manage virtual cards for secure online transactions, enhancing your security. Users can generate virtual cards for online shopping, reducing the risk of fraud.', 
              image: cardImage 
            },
            { 
              title: 'Smart Savings', 
              description: 'Lock away portions of your salary to save effortlessly, helping you reach your financial goals. This feature encourages users to save by automatically setting aside money.', 
              image: savingsImage 
            },
          ].map((feature, index) => (
            <div
              key={index}
              style={featureCardStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img src={feature.image} alt={feature.title} style={imageStyle} />
              <h3 style={featureTitleStyle}>{feature.title}</h3>
              <p style={featureDescriptionStyle}>{feature.description}</p>
            </div>
          ))}
        </div>

        <h2 style={{ ...titleStyle, marginTop: '3rem' }}>Security Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          {[
            { 
              title: 'Facial Recognition', 
              description: 'Advanced facial recognition for secure access, ensuring your data is protected. This feature enhances security by allowing only authorized users to access sensitive information.', 
              image: facialRecognitionImage 
            },
            { 
              title: 'Biometric Authentication', 
              description: 'Use your fingerprint for quick and secure logins, enhancing user experience. This feature provides an additional layer of security while making access convenient.', 
              image: biometricImage 
            },
            { 
              title: 'Enterprise-Grade Security', 
              description: 'Robust security protocols to protect your financial data, giving you peace of mind. This feature ensures that all transactions and data are encrypted and secure.', 
              image: securityImage 
            },
          ].map((securityFeature, index) => (
            <div
              key={index}
              style={featureCardStyle}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img src={securityFeature.image} alt={securityFeature.title} style={imageStyle} />
              <h3 style={featureTitleStyle}>{securityFeature.title}</h3>
              <p style={featureDescriptionStyle}>{securityFeature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
