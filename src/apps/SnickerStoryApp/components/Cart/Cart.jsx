import React from "react";
import styles from "./Cart.module.css";
import cartItems from "../../cart.json"; 
import basketIcon from "../../assets/basket.png"; // PNG для кнопки удаления

const Cart = () => {
  return (
    <main className={styles.cartMain}>
      {/* Заголовок */}
      <h2 className={styles.cartTitle}>Корзина</h2>
      <div className={styles.titleLine}></div>

      <div className={styles.cartContent}>
        {/* Левая боковая информация */}
        <div className={styles.summaryBox}>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
          <div className={styles.total}>
            Итого:{" "}
            {cartItems.reduce(
              (sum, item) => sum + parseInt(item.price, 10),
              0
            )}{" "}
            €
          </div>
        </div>

        {/* Карточки корзины */}
        <div className={styles.cartCards}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartCard}>
              <img
                src={require(`../../assets/${item.image}`)}
                alt={item.name}
                className={styles.cartImage}
              />
              <div className={styles.cartInfo}>
                <span className={styles.cartName}>{item.name}</span>
                <span className={styles.cartPrice}>{item.price}</span>
              </div>
              <button className={styles.deleteButton}>
                <img src={basketIcon} alt="Удалить" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Cart;
