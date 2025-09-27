import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // начально корзина пустая

  // добавить товар в корзину
  const addToCart = (product) => {
    setCart((prevCart) => {
      // проверяем, есть ли товар уже
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        return prevCart; // товар уже есть, не дублируем
      }
      return [...prevCart, product];
    });
  };

  // удалить товар из корзины
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
