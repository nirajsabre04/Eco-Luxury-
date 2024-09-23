import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../products.json'; // Import the product data

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
    <div>
      <h2>{product.name}</h2>
      {selectedFlavor && (
        <div>
          <img src={selectedFlavor.image} alt={selectedFlavor.name} />
          <p>{selectedFlavor.description}</p>

          <h3>Select Flavor:</h3>
          <div className="flavor-images">
            {product.flavors.map((flavor, index) => (
              <img
                key={index}
                src={flavor.image}
                alt={flavor.name}
                className={`flavor-image ${selectedFlavor.name === flavor.name ? 'selected' : ''}`}
                onClick={() => handleFlavorClick(flavor)}
                style={{ cursor: 'pointer', width: '100px', margin: '10px' }} // You can customize styling here
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
