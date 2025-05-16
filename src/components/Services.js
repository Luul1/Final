import React from 'react';

const Services = () => {
  const sectionStyle = {
    padding: '6rem 2rem',
    background: 'linear-gradient(135deg, #9370DB, #4169E1)',
    position: 'relative',
    overflow: 'hidden',
  };

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '3rem',
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
    fontWeight: '800',
    color: '#FFD700',
    marginBottom: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  };

  const subtitleStyle = {
    fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
    color: '#ffffff',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  };

  const servicesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    padding: '2rem 0',
  };

  const serviceCardStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '1.5rem',
    padding: '2.5rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    },
  };

  const serviceTitleStyle = {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#FFD700',
    marginBottom: '1.5rem',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const serviceDescriptionStyle = {
    fontSize: '1.1rem',
    color: '#ffffff',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
  };

  const featureListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const featureItemStyle = {
    color: '#ffffff',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1rem',
    '&::before': {
      content: '"✓"',
      color: '#FFD700',
      fontWeight: 'bold',
    },
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>Financial Services</h2>
          <p style={subtitleStyle}>
            Empowering your workforce with innovative financial solutions designed for modern businesses
          </p>
        </div>

        <div style={servicesGridStyle}>
          {/* Salary Advance Card */}
          <div style={serviceCardStyle}>
            <h3 style={serviceTitleStyle}>Salary Advance</h3>
            <p style={serviceDescriptionStyle}>
              Provide your employees with flexible access to their earned salary, helping them manage unexpected expenses and financial emergencies.
            </p>
            <ul style={featureListStyle}>
              <li style={featureItemStyle}>Access up to 50% of earned salary</li>
              <li style={featureItemStyle}>Flexible repayment terms</li>
              <li style={featureItemStyle}>Competitive interest rates</li>
              <li style={featureItemStyle}>Instant approval process</li>
              <li style={featureItemStyle}>Secure and confidential</li>
            </ul>
          </div>

          {/* Tax Management Card */}
          <div style={serviceCardStyle}>
            <h3 style={serviceTitleStyle}>Tax Management</h3>
            <p style={serviceDescriptionStyle}>
              Streamline your tax processes with our comprehensive tax management solution, ensuring compliance and efficiency.
            </p>
            <ul style={featureListStyle}>
              <li style={featureItemStyle}>Automated tax calculations</li>
              <li style={featureItemStyle}>Real-time tax updates</li>
              <li style={featureItemStyle}>Compliance monitoring</li>
              <li style={featureItemStyle}>Digital tax filing</li>
              <li style={featureItemStyle}>Detailed tax reports</li>
            </ul>
          </div>

          {/* Automated Payroll Card */}
          <div style={serviceCardStyle}>
            <h3 style={serviceTitleStyle}>Automated Payroll</h3>
            <p style={serviceDescriptionStyle}>
              Simplify your payroll process with our intelligent automation system that handles calculations, deductions, and payments seamlessly.
            </p>
            <ul style={featureListStyle}>
              <li style={featureItemStyle}>Automated salary calculations</li>
              <li style={featureItemStyle}>Multiple payment methods</li>
              <li style={featureItemStyle}>Custom deduction rules</li>
              <li style={featureItemStyle}>Payroll reports and analytics</li>
              <li style={featureItemStyle}>Compliance with labor laws</li>
            </ul>
          </div>

          {/* Mobile Application Card */}
          <div style={serviceCardStyle}>
            <h3 style={serviceTitleStyle}>StaffPesa Mobile App</h3>
            <p style={serviceDescriptionStyle}>
              Access your financial services on the go with our feature-rich mobile application, designed for both employers and employees.
            </p>
            <ul style={featureListStyle}>
              <li style={featureItemStyle}>Real-time salary tracking</li>
              <li style={featureItemStyle}>Mobile salary advances</li>
              <li style={featureItemStyle}>Expense management</li>
              <li style={featureItemStyle}>Push notifications</li>
              <li style={featureItemStyle}>Secure biometric login</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 