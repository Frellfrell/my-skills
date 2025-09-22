import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <img src="https://via.placeholder.com/200" alt="Кроссовки" />
      <h3>Название товара</h3>
      <p>Цена: 0000 ₽</p>
      <button>Добавить в корзину</button>
    </div>
  );
};

export default ProductCard;
