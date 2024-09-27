import React from 'react';
import flipkart from '../assets/flipkart.png';
import amazon from '../assets/amazon.png';
import meesho from '../assets/meesho.png';
import shopify from '../assets/shopify.png';
import '../CSS/Available.css'; // Import the CSS file

const AlsoAvailable = () => {
  return (
    <div className="container">
      <h2 className="title">
        Also Available On
      </h2>
      <div className="logosContainer">
        <div className="logo-item">
          <img
            src={flipkart}
            alt="Flipkart"
            className="logoImage"
          />
        </div>
        <div className="logo-item">
          <img
            src={amazon}
            alt="Amazon"
            className="logoImage"
          />
        </div>
        <div className="logo-item">
          <img
            src={meesho}
            alt="Meesho"
            className="logoImage"
          />
        </div>
        <div className="logo-item">
          <img
            src={shopify}
            alt="Shopify"
            className="logoImage"
          />
        </div>
      </div>
    </div>
  );
};

export default AlsoAvailable;
