// src/Component/ServicesSection.js
import React from 'react';
import S1 from '../assets/S1.webp';
import S2 from '../assets/S2.webp';
import S3 from '../assets/S3.gif';
import '../CSS/ServicesSection.css';

const ServicesSection = () => {
  return (
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
    </section>
  );
};

export default ServicesSection;
