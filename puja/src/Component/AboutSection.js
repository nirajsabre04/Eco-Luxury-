// src/Component/AboutSection.js
import React, { useState } from 'react';
import aboutImage from '../assets/about.png'; // Update the image path accordingly
import img1 from '../assets/8.png'; // Update the image path accordingly
import img2 from '../assets/9.png'; // Update the image path accordingly
import img3 from '../assets/13.png'; // Update the image path accordingly
import img4 from '../assets/11.png'; // Update the image path accordingly
import img5 from '../assets/12.png'; // Update the image path accordingly
import img6 from '../assets/10.png'; // Update the image path accordingly
import product1 from '../assets/3.png'; // Update the image path accordingly
import product2 from '../assets/4.png'; // Update the image path accordingly
import product3 from '../assets/5.png'; // Update the image path accordingly
import product4 from '../assets/6.png'; // Update the image path accordingly
import '../CSS/AboutSection.css';

const productDescriptions = [
  {
    image: product1,
    description: "Description for product 1."
  },
  {
    image: product2,
    description: "Description for product 2."
  },
  {
    image: product3,
    description: "Description for product 3."
  },
  {
    image: product4,
    description: "Description for product 4."
  },
 
];

const AboutSection = () => {

  const [currentProduct, setCurrentProduct] = useState(0);

  const handleProductChange = (direction) => {
    setCurrentProduct(prev => {
      if (direction === 'next') {
        return (prev + 1) % productDescriptions.length;
      } else {
        return (prev - 1 + productDescriptions.length) % productDescriptions.length;
      }
    });
  };

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
      

      <div className="about-gallery">
  <div className="gallery-slider">
    <div className="gallery-slide">
      <div className="gallery-item"><img src={img1} alt="Gallery 1" /></div>
      <div className="gallery-item"><img src={img2} alt="Gallery 2" /></div>
      <div className="gallery-item"><img src={img3} alt="Gallery 3" /></div>
    </div>
    <div className="gallery-slide">
      <div className="gallery-item"><img src={img4} alt="Gallery 4" /></div>
      <div className="gallery-item"><img src={img5} alt="Gallery 5" /></div>
      <div className="gallery-item"><img src={img6} alt="Gallery 6" /></div>
    </div>
  </div>
</div>

      <div className="product-section">
        <h2>Our Product</h2>
        <div className="product-content">
          <div className="product-slider">
            <button className="slider-button prev" onClick={() => handleProductChange('prev')}>❮</button>
            <div className="product-slider-images">
              <img
                src={productDescriptions[currentProduct].image}
                alt={`Product ${currentProduct + 1}`}
                className="product-image"
              />
            </div>
            <button className="slider-button next" onClick={() => handleProductChange('next')}>❯</button>
          </div>
          <div className="product-description">
            <p>{productDescriptions[currentProduct].description}</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;
