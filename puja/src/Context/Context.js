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
  

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };
  const updateCartItemQuantity = (id, flavor, quantity) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id && item.flavor === flavor
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
