import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/Context';
import toast, { Toaster } from 'react-hot-toast';
<<<<<<< HEAD
=======

import ProductImg from '../assets/3.webp';

>>>>>>> e2a0165e4fcde9eb969e93f5a45ae4aa294498d4
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Cart() {
  const { cart, removeFromCart, updateCartItemQuantity } = useContext(CartContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    country: '',
    contactNumber: '',
    city: '',
    postalCode: ''
  });
  const [validPostalCode, setValidPostalCode] = useState(false);

  const handleRemove = (itemId, itemTitle) => {
    removeFromCart(itemId);
    toast.error(`${itemTitle} removed from cart!`);
  };

  const handleQuantityChange = (itemId, quantity) => {
    updateCartItemQuantity(itemId, quantity);
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'postalCode' && value.length === 6) {
      try {
        const response = await axios.get(`http://api.zippopotam.us/in/${value}`);
        const city = response.data.places[0]['place name'];
        setFormData((prevData) => ({ ...prevData, city }));
        setValidPostalCode(true);
      } catch (error) {
        toast.error('Invalid postal code.');
        setValidPostalCode(false);
      }
    }
  };

  const validateForm = () => {
    const { name, email, address, country, contactNumber, city, postalCode } = formData;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contactNumberRegex = /^[0-9]{10}$/;
    const textRegex = /^[a-zA-Z\s]+$/;
    
    if (!name || !textRegex.test(name)) {
      toast.error('Please enter a valid name.');
      return false;
    }

    if (!email || !emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }

    if (!contactNumber || !contactNumberRegex.test(contactNumber)) {
      toast.error('Please enter a valid contact number (10 digits).');
      return false;
    }

    if (!address) {
      toast.error('Please enter your address.');
      return false;
    }

    if (!country || !textRegex.test(country)) {
      toast.error('Please enter a valid country.');
      return false;
    }

    if (!city || !textRegex.test(city)) {
      toast.error('Please enter a valid city.');
      return false;
    }

    if (!postalCode || postalCode.length !== 6 || !validPostalCode) {
      toast.error('Please enter a valid postal code (6 digits).');
      return false;
    }

    return true;
  };

  const handleCheckout = () => {
    if (validateForm()) {
      // If validation passes, navigate to payment page
      const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);
      navigate('/payment', { state: { formData, totalCost } });
    }
  };

  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

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
                <form>
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
                  {!validPostalCode && formData.postalCode.length === 6 && (
                    <div className="invalid-postal-code">
                      <p>Invalid postal code.</p>
                    </div>
                  )}
                  <div className="checkout-button-container">
                    <button type="button" className="btn btn-primary" onClick={handleCheckout}>CheckOut</button>
                  </div>
                </form>
              </div>

              <div className="vertical-line"></div>
              <div className="cart-items">
                <h2>Cart Items</h2>
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} />
                    <div className="item-details">
                      <h3>{item.title}</h3>
                      <p>Price: ₹{item.price}</p>
                      <div className="quantity-control">
                        <button className="btn btn-secondary" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button className="btn btn-secondary" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                      </div>
                      <button className="btn btn-danger" onClick={() => handleRemove(item.id, item.title)}>Remove</button>
                    </div>
                  </div>
                ))}
                <div className="total-cost">
                  <h3>Total Cost: ₹{totalCost}</h3>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <style jsx="true">{`
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
          overflow-x: hidden;
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
          border-radius: 5px;
          background-color: #fff;
        }

        .cart-item img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          margin-right: 20px;
        }

        .item-details {
          flex: 1;
        }

        .quantity-control {
          display: flex;
          align-items: center;
        }

        .quantity-control button {
          border: none;
          background-color: #F28C28;
          padding: 5px 10px;
          margin: 0 5px;
          cursor: pointer;
        }

        .quantity-control button:hover{
         background-color: #FFAC1C;
       
        }
        .total-cost {
          font-size: 1.25em;
          margin-top: 20px;
        }

        .form-group input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ddd;
          border-radius: 5px;
        }

        .btn {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin: 10px;
        }

        .btn-primary {
          background-color: #F28C28;
          color: #fff;
        }

        .btn-danger {
          background-color: #dc3545;
          color: #fff;
        }

        .checkout-button-container {
          display: flex;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .cart-container {
            flex-direction: column;
          }

          .vertical-line {
            display: none;
          }

          .cart-items, .customer-info {
            margin: 0;
            border: none;
            padding: 10px;
          }

          .cart-item img {
            width: 80px;
            height: 80px;
          }

          .total-cost {
            font-size: 1em;
          }
        }

        @media (max-width: 480px) {
          .cart-item {
            flex-direction: column;
            align-items: flex-start;
          }

          .cart-item img {
            width: 100%;
            height: auto;
          }

          .quantity-control button {
            padding: 5px;
          }

          .btn {
            padding: 8px 15px;
          }
        }
      `}</style>
    </>
  );
}

export default Cart;
