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
      id: 1,
      quantity: 1,
      title: 'Buy 1',
      price: '159',
    },
    {
      id: 2,
      quantity: 1,
      title: 'Pack of 3 + 1 free',
      price: '477',
    }
  ];

  const handleAddToCart = (plan) => {
    addToCart(plan); // Add the selected plan to the cart
    toast.success(`${plan.title} added to cart!`); // Show success notification
  };

  return (
    <section id="pricing" className="pricing-section">
      <h1 className="text-center my-5">Buy Organic Cow Dung Cake</h1>
      <div className="container my-5">
        <div className="row">
          {pricingPlans.map((plan) => (
            <div className="col-md-6" key={plan.id}>
              <div className="card text-center pricing-card">
                <div className="card-body">
                  <h3 className="card-title">{plan.title}</h3>
                  <h2 className="card-price">₹{plan.price}/-</h2>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(plan)} // Add to cart on click
                  >
                    <Link to='/cart' className="btn-link">Order Now</Link>
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
