// src/Component/HeroSection.js
import React from 'react';
import Hero from '../assets/Hero.png';
import '../CSS/HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home">
      <div className="video-container">
          <img src={Hero} alt='img'/>
        <div className="overlay-text">
          <h1>Natural Fuel for a Greener Tomorrow</h1>
          <p>Eco-friendly Cow Dung Cakes for Sustainable Living</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
