// src/Component/PricingSection.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/PricingSection.css'; // Ensure this path is correct
import { CartContext } from '../Context/Context'; // Ensure this path is correct
import { toast } from 'react-toastify'; // Ensure you have react-toastify installed

const PricingSection = () => {
  const { addToCart } = useContext(CartContext); // Access addToCart function from context

  const pricingPlans = [
    {
     quantity: 1,
      title: 'Basic',
      price: '₹5/Month',
      features: ['Access to basic features', 'Email support']
    },
    {
      quantity: 1,
      title: 'Advanced',
      price: '₹10/Month',
      features: ['Access to all features', 'Priority support']
    }
  ];

  const handleAddToCart = (plan) => {
    addToCart(plan); // Add the selected plan to the cart
    toast.success(`${plan.title} added to cart!`); // Show success notification
  };

  return (
    <section id="pricing" className="pricing-section">
      <h1 className="text-center my-5">Pricing</h1>
      <div className="container my-5">
        <div className="row">
          {pricingPlans.map((plan) => (
            <div className="col-md-6" key={plan.id}>
              <div className="card text-center pricing-card">
                <div className="card-body">
                  <h2 className="card-title">{plan.title}</h2>
                  <h1 className="card-price">{plan.price}</h1>
                  {plan.features.map((feature, index) => (
                    <p className="card-text" key={index}>{feature}</p>
                  ))}
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(plan)} // Add to cart on click
                  >
                    <Link to='/cart' className="btn-link">Add to Cart</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
