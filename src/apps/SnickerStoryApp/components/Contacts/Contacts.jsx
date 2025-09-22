import React from "react";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <main className={styles.contacts}>
      <div className={styles.left}>
        <h2>Контакты</h2>
        <p>Телефон: +7 123 456 7890</p>
        <p>Email: info@snickerstore.ru</p>

        <form className={styles.form}>
          <input type="text" placeholder="Ваше имя" />
          <input type="email" placeholder="Ваш email" />
          <textarea placeholder="Введите сообщение" />
          <button type="submit">Отправить</button>
        </form>
      </div>

      <div className={styles.right}>
        <h3>Найдите нас</h3>
        <div className={styles.socials}>
          <span>Facebook</span>
          <span>CTX</span>
          <span>ChatBox</span>
        </div>
      </div>
    </main>
  );
};

export default Contacts;

