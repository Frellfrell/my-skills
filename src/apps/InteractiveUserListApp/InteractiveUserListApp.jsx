import React from "react";
import { Provider } from "react-redux";
import interactiveUserListStore from "./redux/store";
import UserList from "./UserList";

function InteractiveUserListApp() {
  return (
    <Provider store={interactiveUserListStore}>
      <UserList />
    </Provider>
  );
}

export default InteractiveUserListApp;
