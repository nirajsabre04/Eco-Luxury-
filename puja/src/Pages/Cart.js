// src/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../Context/Context';
import toast, { Toaster } from 'react-hot-toast'; // Import react-hot-toast

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemove = (itemId, itemTitle) => {
    removeFromCart(itemId); // Remove item from cart
    toast.error(`${itemTitle} removed from cart!`); // Show success notification
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
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>Price: {item.price}</p>
                  <button className="btn btn-danger" onClick={() => handleRemove(item.id, item.title)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
        <style jsx>{`
          .Cart {
            padding: 20px;
            text-align: center;
          }

          .empty-cart {
            margin-top: 50px;
          }

          .cart-items {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .cart-item {
            display: flex;
            align-items: center;
            border: 1px solid #ddd;
            margin: 10px;
            padding: 10px;
            width: 300px;
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
        `}</style>
      </div>
    </>
  );
}

export default Cart;
