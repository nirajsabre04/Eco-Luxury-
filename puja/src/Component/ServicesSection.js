// src/Component/ServicesSection.js
import React from 'react';
import S1 from '../assets/S1.webp'; // Replace with the appropriate image for "Pure, Natural Ingredients"
import S2 from '../assets/S2.webp'; // Replace with the appropriate image for "Powerful Purification"
import S3 from '../assets/S3.gif'; // Replace with the appropriate image for "Natural Aromatherapy"
import S4 from '../assets/S4.webp'; // Replace with the appropriate image for "Eco-Friendly & Sustainable"
import S5 from '../assets/S5.webp'; // Replace with the appropriate image for "Long-Lasting & Efficient"
import S6 from '../assets/S6.webp'; // Replace with the appropriate image for "Safe & Chemical-Free"

import '../CSS/ServicesSection.css';

const ServicesSection = () => {
  return (
    <>
      <div className="service-text" id="services">
        <h1>Product Features</h1>
      </div>
      <section className="services-section">
        <div className="service-card">
          <img src={S1} alt="Pure, Natural Ingredients" />
          <div className="inner-card">
            <h2>Pure, Natural Ingredients</h2>
            <p>Crafted from high-quality, indigenous cow dung combined with Sambrani resin, ensuring an authentic and natural product that aligns with traditional practices.</p>
          </div>
        </div>

        <div className="service-card">
          <img src={S2} alt="Powerful Purification" />
          <div className="inner-card">
            <h2>Powerful Purification</h2>
            <p>The smoke from Cow Dung Sambrani Cups helps purify the air by eliminating harmful bacteria, viruses, and allergens.</p>
          </div>
        </div>

        <div className="service-card">
          <img src={S3} alt="Natural Aromatherapy" />
          <div className="inner-card">
            <h2>Natural Aromatherapy</h2>
            <p>The combination of cow dung and Sambrani resin produces a rich, soothing aroma that creates a calming atmosphere in your home, office, or temple.</p>
          </div>
        </div>

        <div className="service-card">
          <img src={S4} alt="Eco-Friendly & Sustainable" />
          <div className="inner-card">
            <h2>Eco-Friendly & Sustainable</h2>
            <p>Made with environmentally conscious methods, the Cow Dung Sambrani Cup is a biodegradable product that leaves minimal environmental impact.</p>
          </div>
        </div>

        <div className="service-card">
          <img src={S5} alt="Long-Lasting & Efficient" />
          <div className="inner-card">
            <h2>Long-Lasting & Efficient</h2>
            <p>Designed to burn slowly and steadily, providing a long-lasting and consistent fragrance, allowing you to enjoy its benefits for hours without the need for frequent re-lighting.</p>
          </div>
        </div>

        <div className="service-card">
          <img src={S6} alt="Safe & Chemical-Free" />
          <div className="inner-card">
            <h2>Safe & Chemical-Free</h2>
            <p>Free from artificial fragrances, toxins, or harmful chemicals, making it a safe, non-toxic option for you and your family.</p>
          </div>
        </div>

        <div className="service-card">
          <img src={S1} alt="Supports Positive Energy" />
          <div className="inner-card">
            <h2>Supports Positive Energy & Spiritual Growth</h2>
            <p>Burning Cow Dung Sambrani Cups invites positive energy into your space, enhances spiritual practices, and purifies the mind and soul.</p>
          </div>
        </div>

        <div className="service-card">
          <img src={S2} alt="Traditional Craftsmanship" />
          <div className="inner-card">
            <h2>Traditional Craftsmanship</h2>
            <p>Each Cow Dung Sambrani Cup is hand-crafted using traditional techniques, ensuring the highest quality and authenticity in every piece.</p>
          </div>
        </div>

        <div className="service-card">
          <img src={S3} alt="Multi-Purpose Use" />
          <div className="inner-card">
            <h2>Multi-Purpose Use</h2>
            <p>Ideal for pujas, havans, meditation, and creating a serene atmosphere at home, the office, or in wellness spaces.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
