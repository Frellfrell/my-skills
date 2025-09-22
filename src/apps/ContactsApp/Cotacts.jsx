import React from 'react';
import FacebookIcon from "@mui/icons-material/Facebook";
import ChatIcon from "@mui/icons-material/Chat";
import XIcon from "@mui/icons-material/X"; // Twitter/X
import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <section className={styles.contactsSection}>
      
        <div className={styles.socialLinks}>
        <p>Find us on:</p>
        <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer">
    <ChatIcon fontSize="large" sx={{ color: '#799fecff' }} />
  </a>
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <FacebookIcon fontSize="large" sx={{ color: '#799fecff' }} />
  </a>
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <XIcon fontSize="large" sx={{ color: '#799fecff' }} />
  </a>
      </div>
      <div className={styles.contactInfo}>
        <h1>Contact</h1>
        <ul>
          <li>Phone: +4 (162) 456-78-90</li>
          <li>Email: example@example.com</li>
        </ul>

        <form className={styles.contactForm}>
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Your Name" required />
          <input type="text" placeholder="Message" required />
          <button type="submit">Send</button>
        </form>
      </div>

      
    </section>
  );
};

export default Contacts;
