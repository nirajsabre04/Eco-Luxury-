// src/Component/HeroSection.js
import React from 'react';
import Hero from '../assets/Hero.mp4';
import '../CSS/HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home">
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={Hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay-text">
          <h1>Natural Fuel for a Greener Tomorrow</h1>
          <p>Eco-friendly Cow Dung Cakes for Sustainable Living</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
