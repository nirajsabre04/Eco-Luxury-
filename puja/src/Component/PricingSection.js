import React from 'react';
import '../CSS/PricingSection.css';
import cups from '../assets/cups.jpg';
import combo from '../assets/combo.jpg';
import upla from '../assets/upla.jpg';

const PricingSection = () => {
  return (
    <div className="pricing-section">
      <h2 className="section-heading">Product Categories</h2>
      <div className="circle-container">
        <div className="circle-item">
          <div className="inner-circle">
            <img
              src={cups}
              alt="Sambrani Cups"
              className="circle-image"
            />
          </div>
          <h3 className="circle-title">Sambrani Cups</h3>
        </div>
        <div className="circle-item">
          <div className="inner-circle">
            <img
              src={combo}
              alt="Cups Combo"
              className="circle-image"
            />
          </div>
          <h3 className="circle-title">Cups Combo</h3>
        </div>
        <div className="circle-item">
          <div className="inner-circle">
            <img
              src={upla}
              alt="Upla"
              className="circle-image"
            />
          </div>
          <h3 className="circle-title">Upla</h3>
        </div>
        <div className="circle-item">
          <div className="inner-circle">
            <img
              src={upla}
              alt="Upla Combo"
              className="circle-image"
            />
          </div>
          <h3 className="circle-title">Upla Combo</h3>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
