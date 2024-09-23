import React from 'react';
import '../CSS/InfoSection.css';
import { FaShippingFast, FaHandshake, FaDollarSign, FaHeadset } from 'react-icons/fa'; // Using FontAwesome icons

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="info-item">
        <FaShippingFast className="info-icon" />
        <div className="info-text">
          <h3>Free Shipping</h3>
          <p>On All Orders Over ₹399</p>
        </div>
      </div>
      <div className="info-item">
        <FaHandshake className="info-icon" />
        <div className="info-text">
          <h3>Secure Payment</h3>
          <p>We ensure secure payment</p>
        </div>
      </div>
      <div className="info-item">
        <FaHeadset className="info-icon" />
        <div className="info-text">
          <h3>Online Support</h3>
          <p>24/7 Dedicated Support</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
