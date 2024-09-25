import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/PricingSection.css';
import cups from '../assets/cups.jpg';
import combo from '../assets/combo.jpg';
import upla from '../assets/upla.jpg';
import uplacombo from '../assets/upla-combo.jpg';

const products = [
  { id: 1, name: 'Sambrani Cups', image: cups, subIds: [101, 2, 3] }, // Include subIds array for product with id: 1
  { id: 2, name: 'Cups Combo', image: combo },
  { id: 3, name: 'Upla', image: upla },
  { id: 4, name: 'Upla Combo', image: uplacombo }
];

const PricingSection = () => {
  return (
    <div className="pricing-section" id="products">
      <h2 className="section-heading">Product Categories</h2>
      <div className="circle-container">
        {products.map((product) => (
          <div key={product.id} className="circle-item">
            <Link to={`/product/${product.id}`} className="inner-circle">
              <img
                src={product.image}
                alt={product.name}
                className="circle-image"
              />
            </Link>
            <h3 className="circle-title">{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
