import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/ProductCards.css";
import { CartContext } from "../Context/Context";
import toast from "react-hot-toast";

import { productsData } from "../products"; // Adjust the path as necessary

const ProductCards = () => {
<<<<<<< HEAD
=======

  const products = [
    {
      id: 1,
      subId: 101,
      name: "Rose Sambrani Cups",
      price: 199,
      image1: img1,
      image2: imgA,
      description: "This is Product 1.",
    },
    {
      id: 1,
      subId: 105,
      name: "Jasmine Sambrani Cups",
      price: 199,
      image1: img2,
      image2: imgB,
      description: "This is Product 2.",
    },
    {
      id: 1,
      subId: 102,
      name: "Guggle Sambrani Cups",
      price: 199,
      image1: img3,
      image2: imgC,
      description: "This is Product 3.",
    },
    {
      id: 1,
      subId: 103,
      name: "Sandalwood Sambrani Cups",
      price: 199,
      image1: img4,
      image2: imgD,
      description: "This is Product 4.",
    },
    {
      id: 2,
      subId: 106,
      name: "Cups Combo",
      price: 800,
      image1: img5,
      image2: imgE,
      description: "This is Product 5.",
    },
    {
      id: 1,
      subId: 104,
      name: "Loban Sambrani Cups ",
      price: 199,
      image1: img6,
      image2: imgF,
      description: "This is Product 6.",
    },
    {
      id: 3,
      subId: 107,
      name: "Cow Dung Cake (Upla)",
      price: 159,
      image1: img7,
      image2: imgG,
      description: "This is Product 7.",
    },
    {
      id: 4,
      subId: 108,
      name: "Cow Dung Cake Combo",
      price: 477,
      image1: img8,
      image2: imgH,
      description: "This is Product 8.",
    },
  ];


>>>>>>> 9faa4f16caf3392e563175d3bec578973fd7342b
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
