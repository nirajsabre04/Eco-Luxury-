// src/Context/Context.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // const addToCart = (item) => {
  //   setCart([...cart, item]);
  // };
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };


  const removeFromCart = (id, subId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id || item.subId !== subId));
  };

  const updateCartItemQuantity = (id, subId, quantity) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id && item.subId === subId
          ? { ...item, quantity: quantity }
          : item
      );
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
