import React from "react";
import CartCard from "../CartCard/CartCard";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <section className={styles.cart}>
      <h2>Корзина</h2>
      <CartCard />
      <p className={styles.total}>Итого: 0000 ₽</p>
    </section>
  );
};

export default Cart;
