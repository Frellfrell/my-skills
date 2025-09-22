import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Сникер-магазин</h1>
      <nav className={styles.nav}>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/cart">Корзина</NavLink>
        <NavLink to="/contacts">Контакты</NavLink>
      </nav>
    </header>
  );
};

export default Header;
