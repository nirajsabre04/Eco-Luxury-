import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/Context';
import toast, { Toaster } from 'react-hot-toast';
import ProductImg from '../assets/3.png'

function Cart() {
  const { cart, removeFromCart, updateCartItemQuantity } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    country: '',
    contactNumber: '',
    city: '',
    postalCode: ''
  });

  const handleRemove = (itemId, itemTitle) => {
    removeFromCart(itemId);
    toast.error(`${itemTitle} removed from cart!`);
  };

  const handleQuantityChange = (itemId, quantity) => {
    updateCartItemQuantity(itemId, quantity);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const purchaseDetails = {
      ...formData,
      cartItems: cart.map(item => ({
        title: item.title,
        quantity: item.quantity
      }))
    };
    console.log(purchaseDetails);
  };

  return (
    <>
      <Toaster />
      <div className="Cart">
        <h1>Cart</h1>
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button className="btn btn-primary" onClick={() => window.location.href = "/#services"}>Add Products</button>
          </div>
        ) : (
          <>
            <div className="cart-container">
              <div className="customer-info">
                <h2>Customer Info</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      placeholder='Name *'
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder='Email *'
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder='Contact Number *'
                      id="contactNumber"
                      name="contactNumber"
                      type="tel"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder='Address *'
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder='Country *'
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder='City *'
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      placeholder='Postal Code *'
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="vertical-line"></div>
              <div className="cart-items">
                <h2>Cart Items</h2>
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={ProductImg} alt={item.title} />
                    <div>
                      <h3>{item.title}</h3>
                      <p>Price: {item.price}</p>
                      <div className="quantity-control">
                        <button className="btn btn-secondary" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                        <span id='span'>{item.quantity}</span>
                        <button className="btn btn-secondary" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                      </div>
                      <button className="btn btn-danger" onClick={() => handleRemove(item.id, item.title)}>Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="submit-button-container">
              <button onClick={handleSubmit} className="btn btn-primary">CheckOut</button>
            </div>
          </>
        )}
        <style jsx>{`
        #span {
          color: black;
        }
        span {
          color: red;
        }
        .Cart {
          padding: 20px;
          text-align: center;
        }

        .empty-cart {
          margin-top: 50px;
        }

        .cart-container {
          background-color: #F9F9F9;
          border-radius: 2rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-start;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }

        .cart-items, .customer-info {
          overflow-x:hidden;
          flex: 1;
          min-width: 300px;
          margin: 10px;
          padding: 20px;
          box-sizing: border-box;
        }

        .customer-info {
          border-right: 2px solid #ddd;
        }

        .vertical-line {
          width: 2px;
          background-color: #ddd;
          height: 100%;
        }

        .cart-items h2, .customer-info h2 {
          margin-top: 0;
          font-size: 1.5em; /* Responsive font size */
        }

        .cart-item {
          display: flex;
          align-items: center;
          border: 1px solid #ddd;
          margin: 10px;
          padding: 10px;
        }

        .cart-item img {
          width: 100px;
          height: 100px;
          margin-right: 20px;
        }

        .cart-item div {
          text-align: left;
        }

        .btn-danger {
          background-color: #dc3545;
          border: none;
          color: white;
          padding: 5px 10px;
          cursor: pointer;
        }

        .btn-danger:hover {
          background-color: #c82333;
        }

        .quantity-control {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .quantity-control button {
          background-color: #007bff;
          border: none;
          color: white;
          padding: 5px 10px;
          cursor: pointer;
        }

        .quantity-control button:hover {
          background-color: #0056b3;
        }

        .quantity-control span {
          margin: 0 10px;
        }

        .form-group {
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .form-group input {
          width: 100%;
          max-width: 500px; /* Limit the maximum width */
          padding: 8px;
          box-sizing: border-box;
          border: 2px solid #E5E6ED;
          border-radius: 4px;
        }

        .btn-primary {
          background-color: #007bff;
          border: none;
          color: white;
          padding: 10px 20px;
          cursor: pointer;
        }

        .btn-primary:hover {
          background-color: #0056b3;
        }

        .submit-button-container {
          text-align: center;
          margin-top: 20px;
        }

        @media (max-width: 1024px) {
          .cart-container {
            flex-direction: column;
          }

          .customer-info, .cart-items {
            min-width: 100%;
          }

          .vertical-line {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .cart-items h2, .customer-info h2 {
            font-size: 1.2em; /* Smaller font size for smaller screens */
          }

          .form-group input {
            width: 100%;
            font-size: 0.9em; /* Smaller font size for inputs on small screens */
          }
        }

        @media (max-width: 480px) {
          .cart-items h2, .customer-info h2 {
            font-size: 1em; /* Further reduce font size for very small screens */
          }

          .form-group input {
            font-size: 0.8em; /* Further reduce font size for very small screens */
          }
        }
        `}</style>
      </div>
    </>
  );
}

export default Cart;
