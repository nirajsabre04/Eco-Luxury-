import React, { useContext } from 'react';
import '../CSS/PricingSection.css'; // Ensure this path is correct
import { CartContext } from '../Context/Context'; // Ensure this path is correct
import toast, { Toaster } from 'react-hot-toast'; // Ensure you have react-hot-toast installed
import { useNavigate } from "react-router-dom";
import C1 from "../../../puja/src/assets/cart1.png"
import C2 from "../../../puja/src/assets/cart2.png"

const PricingSection = () => {
  const { addToCart, cart } = useContext(CartContext); // Access cart from context
  const navigate = useNavigate();

  // Add image URLs to the pricingPlans
  const pricingPlans = [
    {
      id: 1,
      quantity: 1,
      title: 'Buy',
      price: '159',
      image: C1 // Replace with your image URL
    },
    {
      id: 2,
      quantity: 1,
      title: 'Pack of 3',
      addon: '+1free',
      price: '477',
      image: C2,
      label: 'Most Popular',
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
      toast.success(`${plan.title} added to cart!`, {});
    }
  };

  return (
    <>
      <Toaster />
      <section id="pricing" className="pricing-section py-3">
        <div className="container">
          <div className="row">
            {pricingPlans.map((plan) => (
              <div className="col-md-6" key={plan.id}>
                <div className="card text-center pricing-card mb-3">
                  <h1 className="text-center">Buy Organic Cow Dung Cake</h1>
                  <div className="row g-0">
                    <div className="col-md-6">
                      <img src={plan.image} className="PS-img img-fluid rounded-start" alt={plan.title} />
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <div>
                          <h3 className="card-title">{plan.title}</h3>
                          <p>{plan.addon}</p>
                          <h2 className="card-price">at ₹{plan.price}/-</h2>
                        </div>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleAddToCart(plan)} // Add to cart on click
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
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
