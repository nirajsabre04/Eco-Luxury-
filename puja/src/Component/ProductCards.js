import React, { useState } from "react";
import "../CSS/ProductCards.css"; // Assuming you're using a CSS file for styling
import img1 from "../assets/A.png";
import img2 from "../assets/B.png";
import img3 from "../assets/C.png";
import img4 from "../assets/D.png";
import img5 from "../assets/E.png";
import img6 from "../assets/F.png";
import img7 from "../assets/G.png";
import img8 from "../assets/H.png";
import imgB from "../assets/B1.png"
import imgA from "../assets/A1.png"
import imgC from "../assets/C1.png"
import imgD from "../assets/D1.png"
import imgE from "../assets/E1.png"
import imgF from "../assets/F1.png"
import imgG from "../assets/G1.png"
import imgH from "../assets/H1.png"
const ProductCards = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 500,
      image1: img1,
      image2: imgA,
      rating: 5,
      description: "This is Product 1.",
    },
    {
      id: 2,
      name: "Product 2",
      price: 800,
      image1: img2,
      image2: imgB,
      rating: 4,
      description: "This is Product 2.",
    },
    {
      id: 3,
      name: "Product 3",
      price: 1200,
      image1: img3,
      image2: imgC,
      rating: 5,
      description: "This is Product 3.",
    },
    {
      id: 4,
      name: "Product 4",
      price: 500,
      image1: img4,
      image2: imgD,
      rating: 5,
      description: "This is Product 4.",
    },
    {
      id: 5,
      name: "Product 5",
      price: 800,
      image1: img5,
      image2: imgE,
      rating: 4,
      description: "This is Product 5.",
    },
    {
      id: 6,
      name: "Product 6",
      price: 1200,
      image1: img6,
      image2: imgF,
      rating: 5,
      description: "This is Product 6.",
    },
    {
      id: 7,
      name: "Product 7",
      price: 500,
      image1: img7,
      image2: imgG,
      rating: 5,
      description: "This is Product 7.",
    },
    {
      id: 8,
      name: "Product 8",
      price: 800,
      image1: img8,
      image2: imgH,
      rating: 4,
      description: "This is Product 8.",
    },
  ];

  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
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
                onClick={() => alert(`Viewing more about ${product.name}`)}
              >
                View More
              </button>
            </div>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <div className="rating">
              {"⭐".repeat(product.rating)} ({product.rating})
            </div>
            <button className="add-to-cart">Add to Cart</button>
            <div>
              Quantity: <input type="number" min="1" defaultValue="1" />
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Details of the selected product */}
    </div>
  );
};

export default ProductCards;
