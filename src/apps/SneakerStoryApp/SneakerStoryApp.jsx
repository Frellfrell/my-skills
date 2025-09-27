import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import Contacts from "./components/Contacts/Contacts";
import { CartProvider } from "./context/CartContext";

import styles from "./SneakerStoryApp.module.css";


const SneakerStoryApp = () => {
  return (
    <CartProvider>
         <div className={styles.container}> 
      <Router basename="/my-skills">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
      </div>
    </CartProvider>
  );
};

export default SneakerStoryApp;