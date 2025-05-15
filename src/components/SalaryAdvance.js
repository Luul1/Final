import React, { useState } from 'react';

const SalaryAdvance = () => {
  const [advanceAmount, setAdvanceAmount] = useState('');
  const [repaymentPeriod, setRepaymentPeriod] = useState('1');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const containerStyle = {
    maxWidth: '800px',
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
  };

  const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  };

  const labelStyle = {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#4b5563',
  };

  const inputStyle = {
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid #e5e7eb',
    fontSize: '1rem',
    '&:focus': {
      outline: 'none',
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
    },
  };

  const selectStyle = {
    ...inputStyle,
    backgroundColor: '#ffffff',
  };

  const buttonStyle = {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: '#2563eb',
    },
    '&:disabled': {
      backgroundColor: '#93c5fd',
      cursor: 'not-allowed',
    },
  };

  const messageStyle = {
    padding: '1rem',
    borderRadius: '0.5rem',
    marginTop: '1rem',
    textAlign: 'center',
    backgroundColor: message.type === 'error' ? '#fee2e2' : '#dcfce7',
    color: message.type === 'error' ? '#991b1b' : '#166534',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('/api/salary-advance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(advanceAmount),
          repaymentPeriod: parseInt(repaymentPeriod),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: 'success',
          text: 'Salary advance request submitted successfully!',
        });
        setAdvanceAmount('');
      } else {
        throw new Error(data.message || 'Failed to request salary advance');
      }
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.message || 'An error occurred while processing your request',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Request Salary Advance</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div style={inputGroupStyle}>
          <label style={labelStyle} htmlFor="amount">
            Advance Amount (KES)
          </label>
          <input
            type="number"
            id="amount"
            value={advanceAmount}
            onChange={(e) => setAdvanceAmount(e.target.value)}
            style={inputStyle}
            placeholder="Enter amount"
            required
            min="0"
            step="0.01"
          />
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle} htmlFor="repaymentPeriod">
            Repayment Period (Months)
          </label>
          <select
            id="repaymentPeriod"
            value={repaymentPeriod}
            onChange={(e) => setRepaymentPeriod(e.target.value)}
            style={selectStyle}
            required
          >
            <option value="1">1 Month</option>
            <option value="2">2 Months</option>
            <option value="3">3 Months</option>
          </select>
        </div>

        <button
          type="submit"
          style={buttonStyle}
          disabled={isLoading || !advanceAmount}
        >
          {isLoading ? 'Processing...' : 'Request Advance'}
        </button>
      </form>

      {message.text && (
        <div style={messageStyle}>
          {message.text}
        </div>
      )}
    </div>
  );
};

export default SalaryAdvance; 