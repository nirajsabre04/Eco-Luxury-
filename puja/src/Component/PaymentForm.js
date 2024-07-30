import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast'; // Ensure you have react-hot-toast installed

const PaymentForm = () => {
  const location = useLocation();
  const { formData, totalCost } = location.state || {};
  const navigate = useNavigate();

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
      const res = await axios.post("https://pujasamagri.online/payment.php", data, {
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

  const handleCod = (e) => {
    e.preventDefault();
    const codCharge = 30;
    const totalWithCod = totalCost + codCharge;
    toast.success(`Order Successfully Placed. Total Amount: ₹${totalWithCod}`);
    navigate('/cod-payment', { state: { formData, totalCost: totalWithCod } });
  };

  // Define styles
  const containerStyle = {
    padding: '20px',
    maxWidth: '600px',
    margin: 'auto',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
  };

  const headerStyle = {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    textAlign: 'center',
  };

  const infoStyle = {
    margin: '0.5rem 0',
  };

  const totalCostStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    margin: '1rem 0',
    textAlign: 'center',
  };

  const formStyle = {
    marginTop: '1rem',
  };

  const buttonContainerStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px', // Space between buttons
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
    width: '100%',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const infoTextStyle = {
    fontSize: '0.875rem',
    color: '#333',
    textAlign: 'center',
    marginTop: '5px',
  };
  const infoTextStyle1 = {
    fontSize: '0.875rem',
    color: 'red',
    textAlign: 'center',
    marginTop: '5px',
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
    <>
      <Toaster />
      <div style={containerStyle} className="container">
        <style>{responsiveStyles}</style>
        {formData ? (
          <>
            <h2 style={headerStyle} className="header">Customer Info</h2>
            <div>
              <p style={infoStyle}><strong>Name:</strong> {formData.name}</p>
              <p style={infoStyle}><strong>Email:</strong> {formData.email}</p>
              <p style={infoStyle}><strong>Contact Number:</strong> {formData.contactNumber}</p>
              <p style={infoStyle}><strong>Address:</strong> {formData.address}</p>
              <p style={infoStyle}><strong>Country:</strong> {formData.country}</p>
              <p style={infoStyle}><strong>City:</strong> {formData.city}</p>
              <p style={infoStyle}><strong>Postal Code:</strong> {formData.postalCode}</p>
            </div>
            <h2 style={totalCostStyle} className="total-cost">Total Cost: ₹{totalCost}</h2>
            
            <form style={formStyle}>
              <div style={buttonContainerStyle}>
                <button 
                  type="submit" 
                  style={buttonStyle}
                  className="button"
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                  onClick={handlePayment}
                >
                  Pay Now
                </button>
                <p style={infoTextStyle}><strong>Pay Online and get free delivery!</strong></p>

                <button 
                  type="button" 
                  style={buttonStyle}
                  className="button"
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                  onClick={handleCod}
                >
                  Cash on Delivery
                </button>
                <p style={infoTextStyle1}><strong>For COD Delivery charge applicable: ₹30</strong></p>
              </div>
            </form>
          </>
        ) : (
          <p>No customer info available. Please go back to the cart and provide your details.</p>
        )}
      </div>
    </>
  );
};

export default PaymentForm;
