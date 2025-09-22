import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Сникер-магазин</h1>
      <nav className={styles.nav}>
        <NavLink to="/"
         className={styles.navLink} 
          style={({ isActive }) => ({
            color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.5)'
          })}> 
        Главная</NavLink>
        <NavLink to="/cart"
         className={styles.navLink} 
          style={({ isActive }) => ({
            color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.5)'
          })}> 
        Корзина</NavLink>
        <NavLink to="/contacts"
         className={styles.navLink} 
          style={({ isActive }) => ({
            color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.5)'
          })}> 
        Контакты</NavLink>
      </nav>
    </header>
  );
};

export default Header;
