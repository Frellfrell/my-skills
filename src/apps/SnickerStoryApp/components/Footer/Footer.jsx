import React from "react";
import styles from "./Footer.module.css";
import { Instagram, Twitter, Facebook } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className={styles.footer}>
     <div className={styles.left}>
        <h3 className={styles.title}>Контакты</h3>
        <p className={styles.phone}>8 800 000 00 00</p>
        <p className={styles.email}>emailexample@email.com</p>
        <p className={styles.rights}>
          © 2024 Сникер-магазин. Все права защищены
        </p>
      </div>

      <div className={styles.right}>
        <div className={styles.socials}>
          <Instagram fontSize="large" className={styles.icon} />
          <Twitter fontSize="large" className={styles.icon} />
          <Facebook fontSize="large" className={styles.icon} />
        </div>
        <div className={styles.emailBox}>
          <p className={styles.emailLabel}>Введите свой email</p>
         <div className={styles.emailLine}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
