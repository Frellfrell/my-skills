import React from "react";
import styles from "./ProductCard.module.css";
import products from "../../assets/products.json";



const ProductCard = () => {
  return (
    <div className={styles.productContainer}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <img
            src={require(`../../assets/${product.image}`)}
            alt={product.name}
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>{product.name}</h3>
          <div className={styles.cardPriceBox}>
            <span className={styles.priceLabel}>Цена:</span>
            <span className={styles.cardPrice}>{product.price}</span>
            <button className={styles.addButton}>
              <img
                src={require(`../../assets/${product.buttonImage}`)}
                alt="Добавить"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
