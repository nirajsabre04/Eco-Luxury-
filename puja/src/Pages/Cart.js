import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/Context';
import toast, { Toaster } from 'react-hot-toast';
import ProductImg from '../assets/3.png';
import { useNavigate } from 'react-router-dom';

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

  const handleRemove = (itemId, itemTitle) => {
    removeFromCart(itemId);
    toast.error(`${itemTitle} removed from cart!`);
  };

  const handleQuantityChange = (itemId, quantity) => {
    updateCartItemQuantity(itemId, quantity);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckout = () => {
    // Form validation
    const requiredFields = ['name', 'email', 'address', 'country', 'contactNumber', 'city', 'postalCode'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        toast.error(`Please fill out the ${field} field.`);
        return;
      }
    }

    // If validation passes, navigate to payment page
    navigate('/payment', { state: { formData, totalCost } });
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
          background-color: red;
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
          background-color: #F28C28;
          border: none;
          color: white;
          padding: 5px 10px;
          cursor: pointer;
        }

        .quantity-control button:hover {
          background-color:  #FFAC1C;
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
          background-color: #F28C28;
          border: none;
          color: white;
          padding: 10px 20px;
          cursor: pointer;
        }

        .btn-primary:hover {
          background-color: #FFAC1C;
        }

        .checkout-button-container {
          text-align: center;
          margin-top: 20px;
        }

        .total-cost {
          margin-top: 20px;
          font-size: 1.5em;
          font-weight: bold;
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
          .cart-items h2, .customer-info h2, .total-cost {
            font-size: 1.2em; /* Adjusted for smaller screens */
          }

          .cart-item img {
            width: 80px;
            height: 80px;
            margin-right: 10px;
          }

          .quantity-control button {
            padding: 5px 8px;
          }

          .form-group input {
            max-width: 100%; /* Allow full width on smaller screens */
          }

          .total-cost {
            font-size: 1.2em; /* Adjusted for smaller screens */
          }
        }
      `}</style>
    </>
  );
}

export default Cart;
