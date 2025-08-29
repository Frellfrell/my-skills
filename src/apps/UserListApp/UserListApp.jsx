import React, { useState, useEffect, useCallback, useMemo } from "react";
import UserList from "./components/UserList/UserList";
import styles from "./UserListApp.module.css";

const UserListApp = () => {
  const [userList, setUserList] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  // Загружаем пользователей с API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUserList(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Функция фильтрации (мемоизируем)
  const filterUsers = useCallback(
    (text) =>
      userList.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      ),
    [userList]
  );

  // Отфильтрованные пользователи (мемоизируем)
  const filteredUsers = useMemo(
    () => filterUsers(filter),
    [filter, filterUsers]
  );

  if (loading) {
    return <p className={styles.loading}>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📋 User List</h1>

      <input
        type="text"
        placeholder="Фильтр по имени..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={styles.input}
      />

      <UserList users={filteredUsers} />
    </div>
  );
};

export default UserListApp;
