import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/ProductCards.css";
import { CartContext } from "../Context/Context";
import toast from "react-hot-toast";

import { productsData } from "../products"; // Adjust the path as necessary

const ProductCards = () => {
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const { addToCart, cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  const handleViewMoreClick = (id, subId) => {
    navigate(`/product/${id}/${subId}`);
  };

  const handleAddToCart = (product, flavor) => {
    const productToAdd = {
      id: product.id,
      subId: flavor.subId, // Get the subId from flavor
      name: flavor.name + " " + product.name, // Use flavor name
      price: product.price, // Use product price, assuming it’s same for all flavors
      image: flavor.image, // Use flavor image
      quantity: 1,
    };

    const isProductInCart = cart.some(
      (item) => item.id === productToAdd.id && item.subId === productToAdd.subId
    );

    if (isProductInCart) {
      navigate("/cart");
      toast(`${productToAdd.name} is already in your cart!`, {
        icon: "⚠️",
        style: {
          border: "1px solid #FFD700",
          padding: "16px",
          color: "#333",
        },
      });
    } else {
      addToCart(productToAdd);
      toast.success(`${productToAdd.name} added to cart!`);
      setTimeout(() => {
        window.scrollTo(0, 0);
        navigate("/cart");
      }, 500);
    }
  };



  return (
    <div className="parent">
      <h1>Our Products</h1>
      <div className="product-grid">
        {productsData.map((product) =>
          product.flavors.map((flavor) => (
            <div
              className="product-card"
              key={flavor.subId}
              onMouseEnter={() => handleMouseEnter(flavor.subId)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="image-container">
                <img
                  src={
                    hoveredProductId === flavor.subId
                      ? flavor.subImages[0]
                      : flavor.image
                  } // Using the main image or a hovered sub-image
                  alt={flavor.name}
                  className="product-image"
                />
                <button
                  className="view-more-btn"
                  onClick={() => handleViewMoreClick(product.id, product.subId)}
                >
                  View More
                </button>
              </div>
              <h3>
                {flavor.name} {product.name}
              </h3>
              <p>₹{product.price}</p>
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(product, flavor)} // Pass the flavor data
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductCards;
