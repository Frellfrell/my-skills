import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "./redux/userSlice";


const UserForm = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !status.trim()) {
      alert("Заполните все поля!");
      return;
    }
    dispatch(setUserInfo({ name, status }));
    setName("");
    setStatus("");
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h2>Изменить данные пользователя</h2>
      <input
        type="text"
        placeholder="Введите имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Введите статус"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <button type="submit">Сохранить</button>
    </form>
  );
};

export default UserForm;
