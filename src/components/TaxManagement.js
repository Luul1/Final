import React, { useState, useEffect } from 'react';

const TaxManagement = () => {
  const [taxYear, setTaxYear] = useState(new Date().getFullYear().toString());
  const [taxData, setTaxData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const containerStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: '#ffffff',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '1.5rem',
    textAlign: 'center',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginBottom: '2rem',
  };

  const selectStyle = {
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid #e5e7eb',
    fontSize: '1rem',
    backgroundColor: '#ffffff',
    '&:focus': {
      outline: 'none',
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
    },
  };

  const taxSummaryStyle = {
    backgroundColor: '#f3f4f6',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    marginTop: '2rem',
  };

  const summaryTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem',
  };

  const summaryItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.75rem 0',
    borderBottom: '1px solid #e5e7eb',
    '&:last-child': {
      borderBottom: 'none',
    },
  };

  const labelStyle = {
    color: '#4b5563',
    fontWeight: '500',
  };

  const valueStyle = {
    color: '#1f2937',
    fontWeight: '600',
  };

  const messageStyle = {
    padding: '1rem',
    borderRadius: '0.5rem',
    marginTop: '1rem',
    textAlign: 'center',
    backgroundColor: message.type === 'error' ? '#fee2e2' : '#dcfce7',
    color: message.type === 'error' ? '#991b1b' : '#166534',
  };

  const fetchTaxData = async () => {
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch(`/api/tax-management?year=${taxYear}`);
      const data = await response.json();

      if (response.ok) {
        setTaxData(data);
      } else {
        throw new Error(data.message || 'Failed to fetch tax data');
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.message || 'An error occurred while fetching tax data',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTaxData();
  }, [taxYear]);

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Tax Management</h2>
      
      <form style={formStyle}>
        <select
          value={taxYear}
          onChange={(e) => setTaxYear(e.target.value)}
          style={selectStyle}
        >
          {Array.from({ length: 5 }, (_, i) => {
            const year = new Date().getFullYear() - i;
            return (
              <option key={year} value={year.toString()}>
                {year}
              </option>
            );
          })}
        </select>
      </form>

      {isLoading ? (
        <div style={{ textAlign: 'center' }}>Loading tax information...</div>
      ) : taxData ? (
        <div style={taxSummaryStyle}>
          <h3 style={summaryTitleStyle}>Tax Summary for {taxYear}</h3>
          
          <div style={summaryItemStyle}>
            <span style={labelStyle}>Total Income</span>
            <span style={valueStyle}>KES {taxData.totalIncome.toLocaleString()}</span>
          </div>
          
          <div style={summaryItemStyle}>
            <span style={labelStyle}>Taxable Income</span>
            <span style={valueStyle}>KES {taxData.taxableIncome.toLocaleString()}</span>
          </div>
          
          <div style={summaryItemStyle}>
            <span style={labelStyle}>Total Tax Due</span>
            <span style={valueStyle}>KES {taxData.totalTaxDue.toLocaleString()}</span>
          </div>
          
          <div style={summaryItemStyle}>
            <span style={labelStyle}>Tax Paid</span>
            <span style={valueStyle}>KES {taxData.taxPaid.toLocaleString()}</span>
          </div>
          
          <div style={summaryItemStyle}>
            <span style={labelStyle}>Balance Due</span>
            <span style={valueStyle}>KES {taxData.balanceDue.toLocaleString()}</span>
          </div>
          
          <div style={summaryItemStyle}>
            <span style={labelStyle}>Filing Status</span>
            <span style={valueStyle}>{taxData.filingStatus}</span>
          </div>
        </div>
      ) : null}

      {message.text && (
        <div style={messageStyle}>
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TaxManagement; 