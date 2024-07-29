import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const PaymentForm = () => {
  const location = useLocation();
  const { formData, totalCost } = location.state || {};

  // Payment data - you might want to adjust this to use actual form data
  const data = {
    name: formData?.name || "Vikas",
    amount: totalCost || 1,
    number: formData?.contactNumber || "9999999999",
    MUID: "MUID" + Date.now(),
    transactionId: "T" + Date.now(),
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/order", { ...data });
      if (res.data && res.data.data.instrumentResponse.redirectInfo.url) {
        window.location.href = res.data.data.instrumentResponse.redirectInfo.url;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="PaymentForm">
     
      {formData ? (
        <>
          <h2>Customer Info</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Contact Number:</strong> {formData.contactNumber}</p>
          <p><strong>Address:</strong> {formData.address}</p>
          <p><strong>Country:</strong> {formData.country}</p>
          <p><strong>City:</strong> {formData.city}</p>
          <p><strong>Postal Code:</strong> {formData.postalCode}</p>
          <h2>Total Cost: ₹{totalCost}</h2>
          
          <form onSubmit={handlePayment}>
      
            <div className="col-12 center">
              <button className="w-100" type="submit">
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
