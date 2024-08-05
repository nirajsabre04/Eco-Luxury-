// FullPageCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Hero1 from '../assets/Hero1.png';
import Hero2 from '../assets/Hero2.png';
import Hero3 from '../assets/Hero3.png';
import Hero4 from '../assets/Hero4.png';
import '../CSS/HeroSection.css';

const HeroSection= () => {
  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
        stopOnHover={false}
      >
        <div className="carousel-slide">
          <img src={Hero1} alt="Image 1" />
          <div className="overlay">
            <h1>Quality Upla / Kande Crafted from Pure and Fresh 100% Desi Cow’s Dung (Gobar).</h1>
            <p>Due to its freshness, burning these cow-dung cakes eliminate negative energies from your house and bring in positive energies.</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={Hero2} alt="Image 2" />
          <div className="overlay">
            <h1>Quality Upla / Kande Crafted from Pure and Fresh 100% Desi Cow’s Dung (Gobar).</h1>
            <p>Due to its freshness, burning these cow-dung cakes eliminate negative energies from your house and bring in positive energies.</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={Hero3} alt="Image 3" />
          <div className="overlay">
            <h1>Quality Upla / Kande Crafted from Pure and Fresh 100% Desi Cow’s Dung (Gobar).</h1>
            <p>Due to its freshness, burning these cow-dung cakes eliminate negative energies from your house and bring in positive energies.</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={Hero4} alt="Image 4" />
          <div className="overlay">
            <h1>Quality Upla / Kande Crafted from Pure and Fresh 100% Desi Cow’s Dung (Gobar).</h1>
            <p>Due to its freshness, burning these cow-dung cakes eliminate negative energies from your house and bring in positive energies.</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
