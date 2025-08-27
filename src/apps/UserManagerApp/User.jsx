import React from "react";
import { useSelector } from "react-redux";


const User = () => {
  const { name, status } = useSelector((state) => state.user);

  return (
    <div className="user-card">
      <h2>Информация о пользователе</h2>
      <p><strong>Имя:</strong> {name}</p>
      <p><strong>Статус:</strong> {status}</p>
    </div>
  );
};

export default User;