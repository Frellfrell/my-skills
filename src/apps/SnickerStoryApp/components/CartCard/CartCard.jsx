import React from "react";
import styles from "./CartCard.module.css";

const CartCard = () => {
  return (
    <div className={styles.cartCard}>
      <img src="https://via.placeholder.com/100" alt="Товар" />
      <div>
        <h4>Название товара</h4>
        <p>Цена: 0000 ₽</p>
      </div>
      <button>Удалить</button>
    </div>
  );
};

export default CartCard;
