import React from "react";
import styles from "./ProductCard.module.css";
import products from "../../assets/products.json";
import snicker1 from "../../assets/snicker1.png";
import snicker2 from "../../assets/snicker2.png";
import Plus from "../../assets/+.png";
import Plus1 from "../../assets/+1.png";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const imageMap = {
  "snicker1.png": snicker1,
  "snicker2.png": snicker2,
  "+.png": Plus,
  "+1.png": Plus1
};
const ProductCard = () => {
  const { addToCart } = useCart(); // получаем функцию добавления в корзину
const navigate = useNavigate();

  return (
    <>
      {/* <div className={styles.productContainer}> */}
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <img
            src={imageMap[product.image]}
            alt={product.name}
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>{product.name}</h3>
          <div className={styles.cardBottom}> 
          <div className={styles.cardPriceBox}>
            <span className={styles.priceLabel}>Цена:</span>
            <span className={styles.cardPrice}>{product.price}</span>
            </div>
            <button className={styles.addButton}
              onClick={() => {
                addToCart(product);
                navigate("/cart"); // переход на страницу корзины
              }}
            >
              <img
                src={imageMap[product.buttonImage]}
                alt="Добавить"
              />
            </button>
          </div>
        </div>
      ))}
    </>
      
  );
};

export default ProductCard;
