import React, { useContext } from 'react';
import '../CSS/PricingSection.css'; // Ensure this path is correct
import { CartContext } from '../Context/Context'; // Ensure this path is correct
import toast, { Toaster } from 'react-hot-toast'; // Ensure you have react-hot-toast installed
import {useNavigate} from "react-router-dom";

const PricingSection = () => {
  const { addToCart, cart } = useContext(CartContext); // Access cart from context
  const navigate = useNavigate();
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
    // Check if the product is already in the cart
    const isProductInCart = cart.some(item => item.id === plan.id);

    if (isProductInCart) {
      navigate("/cart");
      toast(`${plan.title} is already in your cart!`, {
        icon: '⚠️',
        style: {
          border: '1px solid #FFD700',
          padding: '16px',
          color: '#333',
        },
       
      }); // Show info notification if already in cart
    } else {
      addToCart(plan); // Add the selected plan to the cart
      toast.success(`${plan.title} added to cart!`, {
  
      }); // Show success notification
    }
  };

  return (
    <>
      <Toaster />
      <section id="pricing" className="pricing-section py-3">
        <h1 className="text-center">Buy Organic Cow Dung Cake</h1>
        <div className="container my-5">
          <div className="row">
            {pricingPlans.map((plan) => (
              <div className="col-md-6" key={plan.id}>
                <div className="card text-center pricing-card mb-3">
                  <div className="card-body">
                    <h3 className="card-title">{plan.title}</h3>
                    <h2 className="card-price">₹{plan.price}/-</h2>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(plan)} // Add to cart on click
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
