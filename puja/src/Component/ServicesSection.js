// src/Component/ServicesSection.js
import React from 'react';
import S1 from '../assets/S1.webp';
import S2 from '../assets/S2.webp';
import S3 from '../assets/S3.gif';
import S4 from '../assets/S4.webp';
import S5 from '../assets/S5.webp';
import S6 from '../assets/S6.webp';

import '../CSS/ServicesSection.css';

const ServicesSection = () => {
  return (
    <>
    <div className="service-text">
    <h1>Product Features</h1></div>
    <section id="services" className="services-section">

      <div className="service-card">
        <img src={S1} alt="Service 1" />
        <h3>High-Quality</h3>
        <p>High-quality cow dung cakes for a sustainable living.</p>
      </div>
      <div className="service-card">
        <img src={S3} alt="Service 2" />
        <h3>Eco-Friendly</h3>
        <p>Eco-friendly and natural materials for your everyday needs.</p>
      </div>
      <div className="service-card">
        <img src={S2} alt="Service 3" />
        <h3>Sustainable</h3>
        <p>Clean and green environment with our sustainable products.</p>
      </div>
      <div className="service-card">
        <img src={S4} alt="Service 4" />
        <h3>Organic Fertilizer</h3>
        <p>Enhance your garden's growth with our organic cow dung fertilizer, enriching soil naturally.</p>
      </div>
      <div className="service-card">
        <img src={S5} alt="Service 5" />
        <h3>Traditional Fuel</h3>
        <p>Experience a natural way of cooking and heating with our traditional cow dung fuel cakes.</p>
      </div>
      <div className="service-card">
        <img src={S6} alt="Service 6" />
        <h3>Natural Air Purifier</h3>
        <p>Improve indoor air quality with our natural cow dung air purifiers, which help eliminate odors and toxins.</p>
      </div>
    </section>
    </>
  );
};

export default ServicesSection;
