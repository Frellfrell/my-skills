import React from "react";
import styles from "./Cart.module.css";
import { useCart } from "../../context/CartContext";
 import snicker1 from "../../assets/snicker1.png";
import snicker2 from "../../assets/snicker2.png";
import basketIcon from "../../assets/basket.png"; // PNG для кнопки удаления



const imageMap = {
  "snicker1.png": snicker1,
  "snicker2.png": snicker2
};

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  
const total = cartItems.reduce(
    (sum, item) => sum + parseInt(item.price, 10),
    0
  );
  return (
    <main className={styles.cartMain}>
      {/* Заголовок */}
      <h2 className={styles.cartTitle}>Корзина</h2>
      <div className={styles.titleLine}></div>

      <div className={styles.cartContent}>
         {/* Карточки корзины */}
        <div className={styles.cartCards}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartCard}>
              <img
                src={imageMap[item.image]}
                alt={item.name}
                className={styles.cartImage}
              />
              <div className={styles.dividerVertical}></div>
              <div className={styles.cartInfo}>
                <span className={styles.cartName}>{item.name}</span>
                <div className={styles.cardPriceBox}>
                  <span className={styles.priceLabel}>Цена:</span>
                  <span className={styles.cartPrice}>{`${item.price} `}</span>
                </div>
              </div>
              <button className={styles.deleteButton}
              onClick={() => removeFromCart(item.id)}
              >
                <img src={basketIcon} alt="Удалить" />
              </button>
            </div>
          ))}
        </div>
        {/* правая боковая информация */}
        <div className={styles.summaryBox}>
           <div className={styles.totalLabel}>Итого</div>
          <ul className={styles.totalList}>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} 
              </li>
            ))}
          </ul>
          <div className={styles.summaryLine}></div>
          <div className={styles.total}>
           Цена:
            <br />
            {total}€
          </div>
        </div>

       
      </div>
    </main>
  );
};

export default Cart;
