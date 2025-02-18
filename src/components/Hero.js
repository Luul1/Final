import React from 'react';
import heroImage from '../assets/spesa.jpeg'; // Replace with your actual image path

const Hero = () => {
  // Inline styles
  const sectionStyle = {
    display: 'flex',
    alignItems: 'flex-start', // Align items to the top
    justifyContent: 'space-between',
    padding: '8rem 1.5rem', // Increased padding for better spacing
    backgroundImage: `url(${heroImage})`, // Set the background to the image
    backgroundSize: 'cover', // Cover the entire section
    backgroundPosition: 'center', // Center the image
    color: 'black', // Change text color to black
    height: '100vh', // Set height to full viewport height
  };

  const textContainerStyle = {
    maxWidth: '600px', // Limit width for better readability
    padding: '1rem', // Add some padding
    borderRadius: '0.5rem', // Rounded corners
  };

  const titleStyle = {
    fontSize: '3.5rem', // Increased font size for the title
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#1d4ed8', // Change heading color to blue
  };

  const subtitleStyle = {
    fontSize: '1.8rem', // Increased font size for the subtitle
    fontWeight: '400',
    marginBottom: '1.5rem',
  };

  const paragraphStyle = {
    fontSize: '1.25rem',
    marginBottom: '1.5rem',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#1d4ed8', // Change heading color to consistent blue
  };

  return (
    <section style={sectionStyle}>
      <div style={textContainerStyle}>
        <h1 style={titleStyle}>Your Personal Financial Hub</h1>
        <h2 style={subtitleStyle}>Empowering Your Financial Journey</h2>
        <p style={paragraphStyle}>
          StaffPesa is a comprehensive mobile payment solution integrated with StaffMa HR's payroll system, empowering employees to manage, spend, and save their money effortlessly.
        </p>
        <p style={paragraphStyle}>
          With features like direct salary payments, digital wallets, and smart savings, StaffPesa ensures that you have complete control over your finances.
        </p>
        <p style={paragraphStyle}>
          Join thousands of satisfied users who are already enjoying the benefits of seamless financial management.
        </p>
      </div>
    </section>
  );
};

export default Hero;
