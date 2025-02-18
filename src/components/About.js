import React from 'react';
import johnImage from '../assets/ceo.jpeg'; // Replace with your actual image path
import janeImage from '../assets/cto.jpeg'; // Replace with your actual image path
import emilyImage from '../assets/coo.jpeg'; // Replace with your actual image path
import heroImage from '../assets/spesa.jpeg'; // Background image for About section

const About = () => {
  // Inline styles
  const sectionStyle = {
    padding: '4rem 1.5rem',
    backgroundImage: `url(${heroImage})`, // Set the background to the same image as the Hero section
    backgroundSize: 'cover', // Cover the entire section
    backgroundPosition: 'center', // Center the image
    color: 'black', // Change text color to black for contrast
    textAlign: 'left', // Align text to the left
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#1d4ed8', // Consistent blue color for titles
    marginBottom: '1rem',
    textAlign: 'left', // Ensure title is left-aligned for About Us
  };

  const leadershipTitleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1d4ed8', // Dark blue color for titles
    textAlign: 'center', // Center the title for Leadership Team
  };

  const paragraphStyle = {
    fontSize: '1.25rem',
    marginBottom: '1.5rem',
    maxWidth: '800px',
    margin: '0 0 1.5rem 0', // Remove auto margin and add bottom margin for spacing
    lineHeight: '1.6', // Improved line height for readability
    color: 'black', // Change paragraph color to black
    padding: '0 1rem', // Add horizontal padding for smaller screens
  };

  const leadershipStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '2rem',
  };

  const teamMemberStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background for team member cards
    borderRadius: '0.5rem',
    padding: '2rem',
    margin: '1rem',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    width: '250px',
    textAlign: 'center',
    transition: 'transform 0.3s', // Add transition for hover effect
  };

  const teamMemberHoverStyle = {
    transform: 'scale(1.05)', // Slightly enlarge on hover
  };

  const imageStyle = {
    width: '150px', // Increased width for better visibility
    height: '150px', // Fixed height for uniformity
    objectFit: 'cover', // Cover the area without distortion
    borderRadius: '0.5rem', // Rounded corners for the image
    marginBottom: '1rem', // Space between image and text
  };

  const whyUsStyle = {
    marginTop: '4rem',
    padding: '2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly opaque for contrast
    borderRadius: '0.5rem',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center the content
    textAlign: 'center', // Center the text
  };

  return (
    <div>
      {/* About Us Section */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>About Us</h2>
        <p style={paragraphStyle}>
          StaffPesa is dedicated to providing innovative financial solutions that empower individuals and businesses. Our mission is to simplify financial management and enhance the user experience through technology.
        </p>
        <p style={paragraphStyle}>
          With a focus on security, efficiency, and user satisfaction, we strive to be the leading mobile payment solution in the market.
        </p>
        <p style={paragraphStyle}>
          Our team is committed to continuous improvement and innovation, ensuring that our users have access to the best financial tools available.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <div style={whyUsStyle}>
        <h2 style={titleStyle}>Why Choose Us?</h2>
        <p style={paragraphStyle}>
          Our commitment to innovation, security, and customer satisfaction sets us apart. We provide:
        </p>
        <p style={paragraphStyle}>
          - A user-friendly mobile app that simplifies your financial transactions.
        </p>
        <p style={paragraphStyle}>
          - Secure transactions that protect your data and funds.
        </p>
        <p style={paragraphStyle}>
          - 24/7 customer support to assist you whenever you need help.
        </p>
        <p style={paragraphStyle}>
          - Competitive fees that ensure you get the best value for your money.
        </p>
      </div>

      {/* Our Leadership Team Section */}
      <h2 style={leadershipTitleStyle}>Our Leadership Team</h2>
      <div style={leadershipStyle}>
        <div style={teamMemberStyle} onMouseOver={(e) => e.currentTarget.style.transform = teamMemberHoverStyle.transform} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          <img src={johnImage} alt="Adan kalla" style={imageStyle} />
          <h3>Adan Kalla</h3>
          <p>CEO</p>
          <p>Adan has over 10 years of experience in the financial technology sector.</p>
        </div>
        <div style={teamMemberStyle} onMouseOver={(e) => e.currentTarget.style.transform = teamMemberHoverStyle.transform} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          <img src={janeImage} alt="Asia Kala" style={imageStyle} />
          <h3>Asia Kala</h3>
          <p>CTO</p>
          <p>Asia is an expert in software development and leads our tech innovations.</p>
        </div>
        <div style={teamMemberStyle} onMouseOver={(e) => e.currentTarget.style.transform = teamMemberHoverStyle.transform} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          <img src={emilyImage} alt="Lule Kala" style={imageStyle} />
          <h3>Lule Kala</h3>
          <p>CFO</p>
          <p>Lule manages our financial strategies and ensures fiscal responsibility.</p>
        </div>
      </div>
    </div>
  );
};

export default About; 



