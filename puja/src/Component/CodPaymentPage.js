import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CodPaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook for navigation
  const { formData, totalCost } = location.state || {};
  const codCharge = 30;
  const totalCostWithCod = totalCost + codCharge;

  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle modal open
  const openModal = () => setIsModalOpen(true);

  // Function to handle modal close and navigate to home
  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/'); // Navigate to home page
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Order Summary</h2>
      {formData ? (
        <div>
          <p style={infoStyle}><strong>Name:</strong> {formData.name}</p>
          <p style={infoStyle}><strong>Email:</strong> {formData.email}</p>
          <p style={infoStyle}><strong>Contact Number:</strong> {formData.contactNumber}</p>
          <p style={infoStyle}><strong>Address:</strong> {formData.address}</p>
          <p style={infoStyle}><strong>Country:</strong> {formData.country}</p>
          <p style={infoStyle}><strong>City:</strong> {formData.city}</p>
          <p style={infoStyle}><strong>Postal Code:</strong> {formData.postalCode}</p>
          <div style={summaryStyle}>
            <p style={totalCostStyle}>Total Cost: ₹{totalCost}</p>
            <p style={chargesStyle}><strong>+ Delivery Charges: ₹{codCharge}</strong></p>
            <h3 style={totalCostWithCodStyle}>Total Cost with COD Charges: ₹{totalCostWithCod}</h3>
          </div>
          <div style={buttonContainerStyle}>
            <button
              style={buttonStyle}
              onClick={openModal}
            >
              Place Your Order
            </button>
          </div>
          {isModalOpen && (
            <div style={modalOverlayStyle}>
              <div style={modalStyle}>
                <h3 style={modalHeaderStyle}>Order Successfully Placed!</h3>
                <p style={modalContentStyle}>Your order has been placed with a total amount of ₹{totalCostWithCod}. Thank you for shopping with us!</p>
                <button style={modalButtonStyle} onClick={closeModal}>Close</button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p style={errorStyle}>No customer info available. Please go back to the cart and provide your details.</p>
      )}
    </div>
  );
};

// Base styles
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
  textAlign: 'center',
};

const infoStyle = {
  margin: '0.5rem 0',
  fontSize: '1rem',
};

const summaryStyle = {
  marginTop: '1rem',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ddd',
  backgroundColor: '#f9f9f9',
  textAlign: 'center',
};

const totalCostStyle = {
  fontSize: '1.25rem',
  fontWeight: 'bold',
};

const chargesStyle = {
  fontSize: '1rem',
  color: '#ff5722',
};

const totalCostWithCodStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#007bff',
};

const buttonContainerStyle = {
  textAlign: 'center',
  marginTop: '1rem',
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

// Modal styles
const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const modalStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '500px',
  width: '100%',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

// Modal text and button styles
const modalHeaderStyle = {
  fontSize: '1.5rem',
  marginBottom: '10px',
};

const modalContentStyle = {
  marginBottom: '20px',
};

const modalButtonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  fontSize: '1rem',
  borderRadius: '4px',
  cursor: 'pointer',
};

// Error style
const errorStyle = {
  color: 'red',
  textAlign: 'center',
};

// Responsive Styles
const responsiveStyles = `
  @media (max-width: 768px) {
    ${containerStyle}
    padding: 15px;
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    ${headerStyle}
    font-size: 1.25rem;
    
    ${infoStyle}
    font-size: 0.9rem;
    
    ${totalCostStyle}
    font-size: 1rem;
    
    ${chargesStyle}
    font-size: 0.9rem;
    
    ${totalCostWithCodStyle}
    font-size: 1.25rem;
    
    ${buttonStyle}
    padding: 8px 16px;
    font-size: 0.9rem;
    
    ${modalHeaderStyle}
    font-size: 1.25rem;
    
    ${modalContentStyle}
    font-size: 0.9rem;
    
    ${modalButtonStyle}
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

export default CodPaymentPage;