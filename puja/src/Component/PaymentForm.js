import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const PaymentForm = () => {
  const location = useLocation();
  const { formData, totalCost } = location.state || {};

  const data = {
    name: formData?.name || "Vikas",
    amount: totalCost * 100 || 100, // Amount in paisa (1 INR = 100 paisa)
    number: formData?.contactNumber || "9999999999",
    email: formData?.email || "xyz@gmail.com",
    MUID: "MUID" + Date.now(),
    transactionId: "T" + Date.now(),
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://pujasamagri.online//payment.php", data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.data && res.data.url) {
        window.location.href = res.data.url;
      } else {
        console.error("Payment initiation failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const containerStyle = {
    padding: '20px',
    maxWidth: '600px',
    margin: 'auto',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const headerStyle = {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  };

  const infoStyle = {
    margin: '0.5rem 0',
  };

  const totalCostStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    margin: '1rem 0',
  };

  const formStyle = {
    marginTop: '1rem',
  };

  const buttonContainerStyle = {
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  // Responsive Styles
  const responsiveStyles = `
    @media (max-width: 768px) {
      .container {
        padding: 15px;
      }

      .header {
        font-size: 1.25rem;
      }

      .total-cost {
        font-size: 1.1rem;
      }

      .button {
        font-size: 0.9rem;
        padding: 8px 16px;
      }
    }

    @media (max-width: 480px) {
      .container {
        padding: 10px;
      }

      .header {
        font-size: 1.1rem;
      }

      .total-cost {
        font-size: 1rem;
      }

      .button {
        font-size: 0.8rem;
        padding: 6px 12px;
      }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{responsiveStyles}</style>
      {formData ? (
        <>
          <h2 style={headerStyle}>Customer Info</h2>
          <div>
            <p style={infoStyle}><strong>Name:</strong> {formData.name}</p>
            <p style={infoStyle}><strong>Email:</strong> {formData.email}</p>
            <p style={infoStyle}><strong>Contact Number:</strong> {formData.contactNumber}</p>
            <p style={infoStyle}><strong>Address:</strong> {formData.address}</p>
            <p style={infoStyle}><strong>Country:</strong> {formData.country}</p>
            <p style={infoStyle}><strong>City:</strong> {formData.city}</p>
            <p style={infoStyle}><strong>Postal Code:</strong> {formData.postalCode}</p>
          </div>
          <h2 style={totalCostStyle}>Total Cost: ₹{totalCost}</h2>
          
          <form style={formStyle} onSubmit={handlePayment}>
            <div style={buttonContainerStyle}>
              <button 
                type="submit" 
                style={buttonStyle}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
              >
                Pay Now
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>No customer info available. Please go back to the cart and provide your details.</p>
      )}
    </div>
  );
};

export default PaymentForm;
