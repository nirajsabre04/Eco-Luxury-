import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { productsData } from '../products';
import '../CSS/ProductDetails.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedFlavor, setSelectedFlavor] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const foundProduct = productsData.find((item) => item.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedFlavor(foundProduct.flavors[0]);
    }
  }, [id]);

  const handleFlavorClick = (flavor) => {
    setSelectedFlavor(flavor);
  };

  if (!product) return <div>Loading...</div>;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="product-details-container">
      <hr />
      <div className="flavor-image-slider">
        {selectedFlavor && selectedFlavor.subImages && selectedFlavor.subImages.length > 0 ? (
          <Slider ref={sliderRef} {...sliderSettings}>
            {selectedFlavor.subImages.map((subImage, index) => (
              <div key={index}>
                <img
                  src={subImage}
                  alt={`${selectedFlavor.name} sub-image ${index + 1}`}
                  className="sub-image"
                />
              </div>
            ))}
          </Slider>
        ) : (
          selectedFlavor && (
            <img
              src={selectedFlavor.image}
              alt={selectedFlavor.name}
              className="main-image"
            />
          )
        )}
      </div>

      <div className="product-info-container">
        <h2>{product.name}</h2>
        <p className="special-offer">Special Offer</p>
        <p>
          <span className="price">₹{product.price}</span> &nbsp; &nbsp;
          <span className="crossed-price">₹{product.originalPrice}</span>
        </p>

        <div className="product-rating">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={index < product.rating ? 'star filled' : 'star'}
            >
              &#9733;
            </span>
          ))}
        </div>

        <h3>Select Flavor:</h3>
        <div className="flavor-images">
          {product.flavors.map((flavor, index) => (
            <img
              key={index}
              src={flavor.image}
              alt={flavor.name}
              className={`flavor-image ${selectedFlavor.name === flavor.name ? 'selected' : ''}`}
              onClick={() => handleFlavorClick(flavor)}
            />
          ))}
        </div>

        {selectedFlavor && <p>{selectedFlavor.description}</p>}

        {selectedFlavor && selectedFlavor.uses && (
          <div className="product-uses">
            <h3>Uses:</h3>
            <ul>
              {selectedFlavor.uses.map((use, index) => (
                <li key={index}>{use}</li>
              ))}
            </ul>
          </div>
        )}

        <button className="buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetails;
