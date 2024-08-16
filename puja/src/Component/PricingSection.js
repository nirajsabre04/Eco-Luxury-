import React, { useContext } from 'react';
import '../CSS/PricingSection.css'; // Ensure the path is correct
import { CartContext } from '../Context/Context'; // Ensure the path is correct
import toast, { Toaster } from 'react-hot-toast'; // Ensure react-hot-toast is installed
import { useNavigate } from "react-router-dom";
import C1 from "../../../puja/src/assets/cart1.png"; // Ensure the image path is correct
import C2 from "../../../puja/src/assets/cart2.png"; // Ensure the image path is correct

const PricingSection = () => {
  const { addToCart } = useContext(CartContext); // Access cart from context
  const navigate = useNavigate();

  const pricingPlans = [
    {
      id: 1,
      heading: 'Buy Organic Cow Dung',
      quantity: 1,
      title: 'Buy',
      price: '159',
      image: C1,
      imageClass: 'image-1',
    },
    {
      id: 2,
      heading: 'Buy 3 and get 1 pack free',
      quantity: 1,
      title: 'Buy',
      price: '477',
      image: C2,
      label: 'Most Popular',
      imageClass: 'image-2',
    }
  ];

  const handleAddToCart = (plan) => {
    toast.success("Added to cart");
    addToCart(plan); // Add the selected plan to the cart
    navigate("/cart");
  };

  return (
    <>
      <Toaster />
      <section id="pricing" className="pricing-section py-3">
        <div className="container">
          <div className="row">
            {pricingPlans.map((plan) => (
              <div className="col-md-6 mb-3" key={plan.id}>
                <div className="card text-center pricing-card">
                  <h1 className="text-center">{plan.heading}</h1>
                  <div className="row g-0">
                    <div className="col-md-6">
                      <img src={plan.image} className="PS-img img-fluid rounded-start" alt={plan.title} />
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <h3 className="card-title">{plan.title}</h3>
                        <h2 className="card-price">at ₹{plan.price}/-</h2>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleAddToCart(plan)}
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
