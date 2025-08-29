import React from "react";
import styles from "./UserList.module.css";

const UserList = ({ users }) => {
  if (!users.length) {
    return <p className={styles.empty}>NO Users</p>;
  }

  return (
    <ul className={styles.list}>
      {users.map((user) => (
        <li key={user.id} className={styles.item}>
          <span className={styles.avatar}>{user.name[0]}</span>
          <span className={styles.name}>{user.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default UserList;

