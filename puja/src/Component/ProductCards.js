import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../CSS/ProductCards.css"; // Assuming you're using a CSS file for styling
import { CartContext } from "../Context/Context"; // Import CartContext
import toast from "react-hot-toast"; // For toast notifications

import img1 from "../assets/ROSE/A.png";
import img2 from "../assets/MOGRA/B.png";
import img3 from "../assets/GUGGAL/C.png";
import img4 from "../assets/SANDALWOOD/D.png";
import img5 from "../assets/MIX/E.png";
import img6 from "../assets/LOBAN/F.png";
import img7 from "../assets/UPLA/G.png";
import img8 from "../assets/UPLA-MIX/H.png";
import imgB from "../assets/MOGRA/B1.png";
import imgA from "../assets/ROSE/A1.png";
import imgC from "../assets/GUGGAL/C1.png";
import imgD from "../assets/SANDALWOOD/D1.png";
import imgE from "../assets/MIX/E1.png";
import imgF from "../assets/LOBAN/F1.png";
import imgG from "../assets/UPLA/G1.png";
import imgH from "../assets/UPLA-MIX/H1.png";

const ProductCards = () => {
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
      price: 199,
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

  const [hoveredProductId, setHoveredProductId] = useState(null);

  const { addToCart, cart } = useContext(CartContext); // Access cart and addToCart from context
  const navigate = useNavigate(); // Initialize useNavigate

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  const handleViewMoreClick = (id, subId) => {
    navigate(`/product/${id}/${subId}`); // Navigate to the product details page with both id and subId
  };

  const handleAddToCart = (product) => {
    const productToAdd = {
      id: product.id,
      subId: product.subId,
      name: product.name,
      price: product.price,
      image: product.image1, // Using the first image here, can be changed
      quantity: 1, // Default quantity
    };

    const isProductInCart = cart.some(
      (item) => item.id === productToAdd.id && item.subId === productToAdd.subId
    );

    if (isProductInCart) {
      navigate("/cart");
      toast(`${productToAdd.name} is already in your cart!`, {
        icon: '⚠️',
        style: {
          border: '1px solid #FFD700',
          padding: '16px',
          color: '#333',
        },
      });
    } else {
      addToCart(productToAdd);
      toast.success(`${productToAdd.name} added to cart!`);
      setTimeout(() => {
        navigate("/cart");
      }, 500); // Redirect after a slight delay
    }
  };

  return (
    <div className="parent">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.subId}
            onMouseEnter={() => handleMouseEnter(product.subId)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="image-container">
              <img
                src={hoveredProductId === product.subId ? product.image2 : product.image1}
                alt={product.name}
                className="product-image"
              />
              <button
                className="view-more-btn"
                onClick={() => handleViewMoreClick(product.id, product.subId)}
              >
                View More
              </button>
            </div>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(product)} // Add product to cart and redirect
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
