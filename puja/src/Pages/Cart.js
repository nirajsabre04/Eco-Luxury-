import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/Context';
import toast, { Toaster } from 'react-hot-toast';

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
    toast.success('Customer info and cart items submitted!');
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
                    <label htmlFor="name">Name <span>*</span></label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email <span>*</span></label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactNumber">Contact Number <span>*</span></label>
                    <input
                      id="contactNumber"
                      name="contactNumber"
                      type="tel"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address <span>*</span></label>
                    <input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country <span>*</span></label>
                    <input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City <span>*</span></label>
                    <input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="postalCode">Postal Code <span>*</span></label>
                    <input
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
                    <img src={item.image} alt={item.title} />
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
              <button onClick={handleSubmit} className="btn btn-primary">Submit All Info</button>
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
        }

        .cart-items, .customer-info {
          flex: 1;
          min-width: 300px;
          margin: 10px;
          padding: 20px;
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
        }

        .form-group label {
          width: 150px;
          margin-right: 10px;
          text-align: right;
        }

        .form-group input {
          flex: 1;
          padding: 8px;
          box-sizing: border-box;
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

        @media (max-width: 768px) {
          .cart-container {
            flex-direction: column;
          }

          .form-group {
            flex-direction: column;
            align-items: flex-start;
          }

          .form-group label {
            margin-right: 0;
            margin-bottom: 5px;
            text-align: left;
          }

          .customer-info {
            border-right: none;
          }

          .vertical-line {
            display: none;
          }
        }
        `}</style>
      </div>
    </>
  );
}

export default Cart;
