import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick'; // Import Slider from react-slick
import { productsData } from '../products'; // Ensure the correct path for importing the data
import '../CSS/ProductDetails.css'; // Import your CSS file for styling
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedFlavor, setSelectedFlavor] = useState(null);

  useEffect(() => {
    const foundProduct = productsData.find((item) => item.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedFlavor(foundProduct.flavors[0]); // Set default flavor
    }
  }, [id]);

  const handleFlavorClick = (flavor) => {
    setSelectedFlavor(flavor);
  };

  if (!product) return <div>Loading...</div>;

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>
      
      {selectedFlavor && (
        <div className="selected-flavor">
          
          {/* Display the sub-images slider where the main image used to be */}
          <div className="flavor-image-slider">
            {selectedFlavor.subImages && selectedFlavor.subImages.length > 0 ? (
              <Slider {...sliderSettings}>
                {selectedFlavor.subImages.map((subImage, index) => (
                  <div key={index}>
                    <img
                      src={subImage}
                      alt={`${selectedFlavor.name} sub-image ${index + 1}`}
                      className="sub-image"
                      style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} // Customize styling
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <img
                src={selectedFlavor.image}
                alt={selectedFlavor.name}
                className="main-image"
                style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
              />
            )}
          </div>

          <p>{selectedFlavor.description}</p>
          
          <h3>Select Flavor:</h3>
          <div className="flavor-images">
            {product.flavors.map((flavor, index) => (
              <img
                key={index}
                src={flavor.image} // Main image
                alt={flavor.name}
                className={`flavor-image ${selectedFlavor.name === flavor.name ? 'selected' : ''}`}
                onClick={() => handleFlavorClick(flavor)}
                style={{ cursor: 'pointer', width: '100px', margin: '10px' }} // Customize styling here
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
