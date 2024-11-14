import React, { useEffect, useState, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { productsData } from '../products';
import '../CSS/ProductDetails.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartContext } from '../Context/Context';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id, subId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedFlavor, setSelectedFlavor] = useState(null);
  const sliderRef = useRef(null);

  const { addToCart, cart } = useContext(CartContext);
  const navigate = useNavigate();

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
      window.scrollTo(0, 0);
      navigate("/cart");
      setTimeout(() => {
        toast("Product is Already In Cart!", {
          icon: "⚠️",
          style: {
            border: "1px solid #FFD700",
            padding: "16px",
            color: "#333",
          },
        });
      })
    } else {
      addToCart(productToAdd);
      toast.success(`${productToAdd.name} added to cart!`);
    }

    setTimeout(() => {
      window.scrollTo(0, 0); // Scroll to top
      navigate("/cart");
    }, 500);
  };

  useEffect(() => {
    const foundProduct = productsData.find((item) => item.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      const flavor = foundProduct.flavors.find(flavor => flavor.subId === parseInt(subId));
      setSelectedFlavor(flavor || foundProduct.flavors[0]);
    }
  }, [id, subId]);

  const handleFlavorClick = (flavor) => {
    setSelectedFlavor(flavor);
  };

  if (!product || !selectedFlavor) return <div>Loading...</div>;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <Toaster />
      <div className="product-details-container">
        <div className='left-content'>
          <div className="flavor-image-slider">
            {selectedFlavor.subImages && selectedFlavor.subImages.length > 0 ? (
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
              <img
                src={selectedFlavor.image}
                alt={selectedFlavor.name}
                className="main-image"
              />
            )}
          </div>
          <container className="product-description">
            <p><b>Description:</b></p>
            <ul>
              {selectedFlavor.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </container>
        </div>
        <div className="right-content">
          <h2>{`${selectedFlavor.name} ${product.name}`}</h2>
          <p className="special-offer">Special Offer</p>
          <p>
            <span className="price">₹{product.price}</span> &nbsp; &nbsp;
            <span className="crossed-price">₹{product.originalPrice}</span>
          </p>

          <div className="product-rating">
            {Array.from({ length: 5 }, (_, index) => (
              <span
                key={index}
                className={index < Math.floor(product.rating) ? 'star filled' : 'star'}
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
          <div className="product-description-mobile">
            <p><b>Description:</b></p>
            <ul>
              {selectedFlavor.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Render Specification if available */}
          {selectedFlavor.specification && selectedFlavor.specification.length > 0 && (
            <div className="specification">
              <h4>Specification:</h4>
              <ul>
                {selectedFlavor.specification.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Render Uses if available */}
          {selectedFlavor.uses && (
            <div className="product-uses">
              <h3>Uses:</h3>
              <ul>
                {selectedFlavor.uses.map((use, index) => (
                  <li key={index}>{use}</li>
                ))}
              </ul>
            </div>
          )}

          <button className="buy-now-btn" onClick={() => handleAddToCart(product, selectedFlavor)}>Buy Now</button>
        </div>
      </div>
    </>

  );
};

export default ProductDetails;
