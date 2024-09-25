import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../CSS/ProductCards.css"; // Assuming you're using a CSS file for styling
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
      name: "Product 1",
      price: 500,
      image1: img1,
      image2: imgA,
      description: "This is Product 1.",
    },
    {
      id: 1,
      name: "Product 2",
      price: 800,
      image1: img2,
      image2: imgB,
      description: "This is Product 2.",
    },
    {
      id: 1,
      name: "Product 3",
      price: 1200,
      image1: img3,
      image2: imgC,
      description: "This is Product 3.",
    },
    {
      id: 1,
      name: "Product 4",
      price: 500,
      image1: img4,
      image2: imgD,
      description: "This is Product 4.",
    },
    {
      id: 1,
      name: "Product 5",
      price: 800,
      image1: img5,
      image2: imgE,
      description: "This is Product 5.",
    },
    {
      id: 1,
      name: "Product 6",
      price: 1200,
      image1: img6,
      image2: imgF,
      description: "This is Product 6.",
    },
    {
      id: 3,
      name: "Product 7",
      price: 500,
      image1: img7,
      image2: imgG,
      description: "This is Product 7.",
    },
    {
      id: 4,
      name: "Product 8",
      price: 800,
      image1: img8,
      image2: imgH,
      description: "This is Product 8.",
    },
  ];

  const [hoveredProductId, setHoveredProductId] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  const handleViewMoreClick = (id) => {
    navigate(`/product/${id}`); // Navigate to the product details page with the product ID
  };

  return (
    <div>
      <div className="product-grid">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
            onMouseEnter={() => handleMouseEnter(product.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="image-container">
              <img
                src={
                  hoveredProductId === product.id
                    ? product.image2
                    : product.image1
                }
                alt={product.name}
                className="product-image"
              />
              <button
                className="view-more-btn"
                onClick={() => handleViewMoreClick(product.id)} // On click, navigate to product details page
              >
                View More
              </button>
            </div>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
