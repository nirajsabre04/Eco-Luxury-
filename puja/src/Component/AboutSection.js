import React from 'react';
import aboutImage from '../assets/about.webp'; // Update the image path accordingly
import '../CSS/AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <img src={aboutImage} alt="About Us" className="about-main-img" />
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Our mission is to provide sustainable and eco-friendly alternatives
            to traditional fuels. We specialize in high-quality cow dung cakes
            made from natural and organic materials, ensuring a clean and green
            environment for your everyday needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
