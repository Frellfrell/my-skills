import React from "react";
import News from "../News/News";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <News />
      <h2>Товары</h2>
      <div className={styles.products}>
        {/* Позже будем подгружать товары из API */}
        <ProductCard />
      </div>
    </main>
  );
};
export default Main;