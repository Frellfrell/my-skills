import React from "react";
import News from "../News/News";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Main.module.css";
import banner from "../../assets/banner.png";

const Main = () => {
  return (
    <main className={styles.main}>
      {/* Баннер */}
      <div className={styles.bannerContainer}>
        <img src={banner} alt="Sneaker Banner" className={styles.banner} />
      </div>

      {/* Заголовок "Товары" */}
      <h2 className={styles.productsTitle}>Товары</h2>
      <div className={styles.titleLine}></div>

      {/* Карточки */}
      <div className={styles.products}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </main>
  );
};

export default Main;