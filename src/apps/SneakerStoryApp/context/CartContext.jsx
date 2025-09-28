import React, { createContext, useContext, useState } from "react";





const CartContext = createContext();

// Хук для использования контекста
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // начально корзина пустая

  // добавить товар в корзину
  const addToCart = (product) => {
    setCart((prevItems) => [...prevItems, product]);
  };

  // Удаление товара из корзины по ID
  const removeFromCart = (id) => {
    setCart((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems: cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
