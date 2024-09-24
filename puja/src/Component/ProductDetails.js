import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../products'; // Ensure the correct path for importing the data
import '../CSS/ProductDetails.css'; // Import your CSS file for styling

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

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>
      {selectedFlavor && (
        <div className="selected-flavor">
          <img src={selectedFlavor.image} alt={selectedFlavor.name} />
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

          <h3>Related Images:</h3>
          <div className="sub-image-carousel">
            {selectedFlavor.subImages.map((subImage, index) => (
              <img
                key={index}
                src={subImage}
                alt={`${selectedFlavor.name} sub-image ${index + 1}`}
                className="sub-image"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
