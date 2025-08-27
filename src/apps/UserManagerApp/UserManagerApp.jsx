import React from "react";


import User from "./User";
import UserForm from "./UserForm";
import "./UserManagerApp.css";


const UserManagerApp = () => {
  return (
    <div className="user-manager-container">
      <h1>Управление пользователем</h1>
      <User />
      <UserForm />
    </div>
  );
};

export default UserManagerApp;