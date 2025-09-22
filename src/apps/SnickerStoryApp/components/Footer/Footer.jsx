import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Сникер-магазин. Все права защищены.</p>
      <p>Контакты: info@snickerstore.ru</p>
    </footer>
  );
};

export default Footer;
