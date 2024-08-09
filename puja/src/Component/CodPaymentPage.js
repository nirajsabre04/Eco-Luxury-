import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast'; 

const CodPaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, totalCost } = location.state || {};

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true); 

  const closeModal = () => {
    setIsModalOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => navigate('/'), 300);
  };

  const handleCod = async (e) => {
    e.preventDefault();
    // const totalWithCod = totalCost + 30;

    // Save order details to database
    try {
      await axios.post("http://ecoluxury.in/save_order.php", {
        name: formData.name,
        email: formData.email,
        contact_number: formData.contactNumber,
        address: formData.address,
        country: formData.country,
        city: formData.city,
        postal_code: formData.postalCode,
        total_cost: totalCost,
        payment_method: 'Cash on Delivery'
      });

      // Send email using Web3Forms
      const form = new FormData();
      form.append('access_key', '79e4bb50-f542-41c9-ab5a-c43967fbb958');
      form.append('subject', 'New Order Received');
      form.append('email', formData.email);
      form.append('message', `
        New order received with the following details:
        Name: ${formData.name}
        Email: ${formData.email}
        Contact Number: ${formData.contactNumber}
        Address: ${formData.address}
        Country: ${formData.country}
        City: ${formData.city}
        Postal Code: ${formData.postalCode}
        Total Cost: ₹${totalCost}
        Payment Method: Cash on Delivery
      `);

      await axios.post('https://api.web3forms.com/submit', form);

      toast.success(`Order Successfully Placed. Total Amount: ₹${totalCost}`);
    } catch (error) {
      console.error(error);
      toast.error('Error placing order. Please try again.');
    }
  };
  
  const handleOrder = (e) => {
    openModal();
    handleCod(e);
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
            <p style={chargesStyle}><strong>With Delivery Charges: ₹30</strong></p>
          </div>
          <div style={buttonContainerStyle}>
            <button
              style={buttonStyle}
              onClick={handleOrder}
            >
              Place Your Order
            </button>
          </div>
          {isModalOpen && (
            <div style={modalOverlayStyle}>
              <div style={modalStyle}>
                <h3 style={modalHeaderStyle}>Order Successfully Placed!</h3>
                <p style={modalContentStyle}>Your order has been placed with a total amount of ₹{totalCost}.You will get all the details of delivery on your email and whatsapp shortly.Thank you for shopping with us!</p>
                <button style={modalButtonStyle} onClick={closeModal}>Close</button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p style={errorStyle}>No customer info available. Please go back to the cart and provide your details.</p>
      )}
      <Toaster />
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
