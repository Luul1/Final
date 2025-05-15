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
    padding: '4rem 1.5rem',
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'black',
    textAlign: 'left',
    maxWidth: '1200px',
    margin: '0 auto',
    '@media (max-width: 768px)': {
      padding: '2rem 1rem',
    },
  };

  const sectionCardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: '2rem',
    borderRadius: '1rem',
    marginBottom: '2rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1000px',
    margin: '0 auto 2rem',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
    '@media (max-width: 768px)': {
      padding: '1.5rem',
      marginBottom: '1.5rem',
      maxWidth: '400px',
    },
  };

  const sectionImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '0.5rem',
    marginBottom: '1.5rem',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  };

  const sectionContentStyle = {
    flex: 1,
    position: 'relative',
    zIndex: 1,
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1d4ed8',
    marginBottom: '1rem',
    textAlign: 'left',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    '@media (max-width: 768px)': {
      fontSize: '1.25rem',
      marginBottom: '0.75rem',
    },
  };

  const paragraphStyle = {
    fontSize: '1rem',
    color: '#64748b',
    lineHeight: '1.6',
    marginBottom: '1rem',
    textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
    '@media (max-width: 768px)': {
      fontSize: '0.9rem',
      lineHeight: '1.4',
    },
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '1.25rem',
    marginBottom: '0.75rem',
    '@media (max-width: 768px)': {
      paddingLeft: '1rem',
      marginBottom: '0.5rem',
    },
  };

  const listItemStyle = {
    marginBottom: '0.35rem',
    fontSize: '0.95rem',
    lineHeight: '1.4',
    color: '#64748b',
    textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)',
    '@media (max-width: 768px)': {
      fontSize: '0.85rem',
      marginBottom: '0.25rem',
    },
  };

  const leadershipTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1d4ed8',
    textAlign: 'center',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
      marginBottom: '0.75rem',
    },
  };

  const leadershipStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    maxWidth: '1000px',
    margin: '2rem auto',
    padding: '0 1rem',
    '@media (max-width: 768px)': {
      gap: '1.5rem',
      padding: '0 0.5rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    },
  };

  const teamMemberStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    textAlign: 'center',
    transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
    '@media (max-width: 768px)': {
      padding: '1.5rem',
    },
  };

  const imageStyle = {
    width: '140px',
    height: '140px',
    objectFit: 'cover',
    borderRadius: '50%',
    marginBottom: '1.5rem',
    border: '4px solid rgba(29, 78, 216, 0.1)',
    transition: 'all 0.3s ease',
    '@media (max-width: 768px)': {
      width: '120px',
      height: '120px',
      marginBottom: '1rem',
    },
  };

  const nameStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1d4ed8',
    marginBottom: '0.35rem',
    '@media (max-width: 768px)': {
      fontSize: '1.1rem',
    },
  };

  const roleStyle = {
    fontSize: '1rem',
    color: '#64748b',
    marginBottom: '0.75rem',
    fontWeight: '500',
    '@media (max-width: 768px)': {
      fontSize: '0.9rem',
      marginBottom: '0.5rem',
    },
  };

  const bioStyle = {
    fontSize: '0.9rem',
    color: '#64748b',
    lineHeight: '1.4',
    '@media (max-width: 768px)': {
      fontSize: '0.85rem',
    },
  };

  return (
    <div>
      <section style={sectionStyle}>
        <div style={sectionCardStyle}>
          <img src={missionImage} alt="Our Mission" style={sectionImageStyle} />
          <div style={sectionContentStyle}>
            <h2 style={titleStyle}>Our Mission</h2>
            <p style={paragraphStyle}>
              At StaffMa, we are on a mission to transform how African SMEs manage their most valuable asset - their people. Through our flagship financial service, StaffPesa, we combine traditional HR management with modern financial technology to create a more efficient, transparent, and empowering work environment.
            </p>
          </div>
        </div>

        <div style={sectionCardStyle}>
          <img src={storyImage} alt="Our Story" style={sectionImageStyle} />
          <div style={sectionContentStyle}>
            <h2 style={titleStyle}>Our Story</h2>
            <p style={paragraphStyle}>
              Founded in 2023, StaffMa was born out of the frustration experienced by African business owners who struggled with manual HR processes, complex payroll calculations, and inefficient financial systems. Our team of HR experts and financial technology specialists came together to create StaffPesa, a comprehensive solution that addresses these pain points, resulting in a platform that not only streamlines business operations but also promotes financial inclusion.
            </p>
          </div>
        </div>

        <div style={sectionCardStyle}>
          <img src={visionImage} alt="Our Vision" style={sectionImageStyle} />
          <div style={sectionContentStyle}>
            <h2 style={titleStyle}>Our Vision</h2>
            <p style={paragraphStyle}>
              We envision a future where every African SME has access to world-class HR management tools through StaffMa, and every employee enjoys seamless financial services via StaffPesa, regardless of their location or background. We are committed to driving innovation in the HR and financial technology space, with a focus on creating solutions that are tailored to the unique needs of African businesses.
            </p>
          </div>
        </div>

        <div style={sectionCardStyle}>
          <img src={marketImage} alt="Target Market" style={sectionImageStyle} />
          <div style={sectionContentStyle}>
            <h2 style={titleStyle}>Target Market & Growth</h2>
            <p style={paragraphStyle}>
              Through StaffMa and our financial service StaffPesa, we serve a vast and growing market:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Over 1.56 million registered SMEs in Kenya</li>
              <li style={listItemStyle}>Initial focus on Kenya with established banking relationships</li>
              <li style={listItemStyle}>Planned expansion to East African Community</li>
              <li style={listItemStyle}>Growing demand for digital HR and financial solutions</li>
              <li style={listItemStyle}>Strong focus on financial inclusion and employee empowerment through StaffPesa</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Leadership Team Section */}
      <h2 style={leadershipTitleStyle}>Our Leadership Team</h2>
      <div style={leadershipStyle}>
        <div style={teamMemberStyle}>
          <img src={johnImage} alt="Adan kalla" style={imageStyle} />
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



