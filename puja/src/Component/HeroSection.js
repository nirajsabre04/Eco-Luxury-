import React from 'react';
import Hero1 from '../assets/Hero1.png';
import Hero2 from '../assets/Hero2.png';
import Hero3 from '../assets/Hero3.png';
import Hero4 from '../assets/Hero4.png';
import '../CSS/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="fade-container">
      <div className="fade-slide">
        <img src={Hero1} alt="Image 1" />
      </div>
      <div className="fade-slide">
        <img src={Hero2} alt="Image 2" />
      </div>
      <div className="fade-slide">
        <img src={Hero3} alt="Image 3" />
      </div>
      <div className="fade-slide">
        <img src={Hero4} alt="Image 4" />
      </div>
      <div className="overlay">
        <h1>Quality Upla / Kande Crafted from Pure and Fresh 100% Desi Cow’s Dung (Gobar).</h1>
        <p>Due to its freshness, burning these cow-dung cakes eliminate negative energies from your house and bring in positive energies.</p>
      </div>
    </div>
  );
};

export default HeroSection;
