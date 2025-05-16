import React from 'react';
import johnImage from '../assets/ceo.jpeg'; // Replace with your actual image path
import janeImage from '../assets/cto.jpeg'; // Replace with your actual image path
import emilyImage from '../assets/coo.jpeg'; // Replace with your actual image path
import heroImage from '../assets/spesa.jpeg'; // Background image for About section
import missionImage from '../assets/employee.jpeg';
import storyImage from '../assets/biometric.jpeg';
import visionImage from '../assets/cardImage.jpeg';
import marketImage from '../assets/salaryImage.jpeg';

const About = () => {
  const sectionStyle = {
    padding: '6rem 2rem',
    background: '#ffffff',
    color: '#333333',
    textAlign: 'left',
    maxWidth: '1400px',
    margin: '0 auto',
  };

  const sectionCardStyle = {
    backgroundColor: '#ffffff',
    padding: '3rem',
    borderRadius: '1.5rem',
    marginBottom: '3rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1200px',
    margin: '0 auto 3rem',
    border: '1px solid #f0f0f0',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
    },
  };

  const sectionImageStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '1rem',
    marginBottom: '2rem',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#9370DB',
    marginBottom: '1.5rem',
    textAlign: 'left',
    lineHeight: '1.2',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    color: '#4a5568',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: '1.5rem 0',
  };

  const listItemStyle = {
    marginBottom: '1rem',
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#4a5568',
    display: 'flex',
    alignItems: 'center',
    '&::before': {
      content: '"•"',
      color: '#9370DB',
      fontWeight: 'bold',
      marginRight: '1rem',
      fontSize: '1.5rem',
    },
  };

  const leadershipTitleStyle = {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '3rem',
    color: '#9370DB',
    textAlign: 'center',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100px',
      height: '4px',
      background: 'linear-gradient(90deg, #9370DB, #4169E1)',
      borderRadius: '2px',
    },
  };

  const leadershipStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    maxWidth: '1200px',
    margin: '4rem auto',
    padding: '0 2rem',
  };

  const teamMemberStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '1.5rem',
    padding: '2.5rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #f0f0f0',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
    },
  };

  const imageStyle = {
    width: '180px',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '50%',
    marginBottom: '2rem',
    border: '4px solid #9370DB',
    boxShadow: '0 10px 20px rgba(147, 112, 219, 0.2)',
  };

  const nameStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#9370DB',
    marginBottom: '0.5rem',
  };

  const roleStyle = {
    fontSize: '1.1rem',
    color: '#4169E1',
    marginBottom: '1rem',
    fontWeight: '600',
  };

  const bioStyle = {
    fontSize: '1rem',
    color: '#4a5568',
    lineHeight: '1.6',
  };

  return (
    <div style={sectionStyle}>
      <div style={sectionCardStyle}>
        <img src={missionImage} alt="Our Mission" style={sectionImageStyle} />
        <div>
          <h2 style={titleStyle}>Our Mission</h2>
          <p style={paragraphStyle}>
            At StaffMa, we are on a mission to transform how African SMEs manage their most valuable asset - their people. Through our flagship financial service, StaffPesa, we combine traditional HR management with modern financial technology to create a more efficient, transparent, and empowering work environment.
          </p>
        </div>
      </div>

      <div style={sectionCardStyle}>
        <img src={storyImage} alt="Our Story" style={sectionImageStyle} />
        <div>
          <h2 style={titleStyle}>Our Story</h2>
          <p style={paragraphStyle}>
            Founded in 2023, StaffMa was born out of the frustration experienced by African business owners who struggled with manual HR processes, complex payroll calculations, and inefficient financial systems. Our team of HR experts and financial technology specialists came together to create StaffPesa, a comprehensive solution that addresses these pain points.
          </p>
        </div>
      </div>

      <div style={sectionCardStyle}>
        <img src={visionImage} alt="Our Vision" style={sectionImageStyle} />
        <div>
          <h2 style={titleStyle}>Our Vision</h2>
          <p style={paragraphStyle}>
            We envision a future where every African SME has access to world-class HR management tools through StaffMa, and every employee enjoys seamless financial services via StaffPesa, regardless of their location or background.
          </p>
        </div>
      </div>

      <div style={sectionCardStyle}>
        <img src={marketImage} alt="Target Market" style={sectionImageStyle} />
        <div>
          <h2 style={titleStyle}>Target Market & Growth</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>Over 1.56 million registered SMEs in Kenya</li>
            <li style={listItemStyle}>Initial focus on Kenya with established banking relationships</li>
            <li style={listItemStyle}>Planned expansion to East African Community</li>
            <li style={listItemStyle}>Growing demand for digital HR and financial solutions</li>
            <li style={listItemStyle}>Strong focus on financial inclusion and employee empowerment</li>
          </ul>
        </div>
      </div>

      <h2 style={leadershipTitleStyle}>Our Leadership Team</h2>
      <div style={leadershipStyle}>
        <div style={teamMemberStyle}>
          <img src={johnImage} alt="Adan Kalla" style={imageStyle} />
          <h3 style={nameStyle}>Adan Kalla</h3>
          <p style={roleStyle}>CEO</p>
          <p style={bioStyle}>Adan has over 10 years of experience in the financial technology sector.</p>
        </div>
        <div style={teamMemberStyle}>
          <img src={janeImage} alt="Asia Kala" style={imageStyle} />
          <h3 style={nameStyle}>Asia Kala</h3>
          <p style={roleStyle}>CTO</p>
          <p style={bioStyle}>Asia is an expert in software development and leads our tech innovations.</p>
        </div>
        <div style={teamMemberStyle}>
          <img src={emilyImage} alt="Lule Kala" style={imageStyle} />
          <h3 style={nameStyle}>Lule Kala</h3>
          <p style={roleStyle}>CFO</p>
          <p style={bioStyle}>Lule manages our financial strategies and ensures fiscal responsibility.</p>
        </div>
      </div>
    </div>
  );
};

export default About; 



