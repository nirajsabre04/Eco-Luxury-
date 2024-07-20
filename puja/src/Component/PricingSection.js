// src/Component/PricingSection.js
import React from 'react';
import '../CSS/PricingSection.css';

const PricingSection = () => {
  return (
    <section id="pricing" className="pricing-section">
      <h1 className="text-center my-5">Pricing</h1>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card text-center pricing-card">
              <div className="card-body">
                <h2 className="card-title">Basic</h2>
                <h1 className="card-price">₹5/Month</h1>
                <p className="card-text">Access to basic features</p>
                <p className="card-text">Email support</p>
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card text-center pricing-card">
              <div className="card-body">
                <h2 className="card-title">Advanced</h2>
                <h1 className="card-price">₹10/Month</h1>
                <p className="card-text">Access to all features</p>
                <p className="card-text">Priority support</p>
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
