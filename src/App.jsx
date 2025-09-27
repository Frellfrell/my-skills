import { useState } from 'react'
import './App.css'
import NotesApp from "./apps/MyNotesApp/NotesApp";
import UserManagerApp from "./apps/UserManagerApp/UserManagerApp";
import UserListApp from "./apps/UserListApp/UserListApp";
import { Provider } from "react-redux";
import userStore from "./apps/UserManagerApp/redux/store";
import notesStore from "./apps/MyNotesApp/redux/store";
import MuiDemoApp from "./apps/MuiDemoApp/MuiDemoApp";
import ThemeToggleApp from "./apps/theme-toggle-app/ThemeToggleApp";
import ContactsApp from "./apps/ContactsApp/ContactsApp";
import SneakerStoryApp from "./apps/SneakerStoryApp/SneakerStoryApp.jsx";
import AntdFormApp from "./apps/AntdFormApp/AntdFormApp";
import InteractiveUserListApp from "./apps/InteractiveUserListApp/InteractiveUserListApp.jsx";

function App() {
const [activeApp, setActiveApp] = useState("notes");

const renderApp = () => {
    switch (activeApp) {
      case "notes":
        return (
         <Provider store={notesStore}>
          <NotesApp />
         </Provider>
        );
      case "manager":
        return (
          <Provider store={userStore}>
            <UserManagerApp />
          </Provider>
        );
         case "userlist":                
        return <UserListApp />;
        case "mui":
        return <MuiDemoApp />;
        case "theme-toggle":
        return <ThemeToggleApp />;
         case "contacts":
        return <ContactsApp />;
        case "sneakerstory":
        return <SneakerStoryApp />;
        case "antdform":
        return <AntdFormApp />;
        case "interactive-userlist":
        return <InteractiveUserListApp />;
      default:
        return <p>Select an app to view</p>;
    }
  };

   return (
    <div className="App">
      <label htmlFor="app-select" className="app-label">Choose an app: </label>

<select
        id="app-select"
        value={activeApp}
        onChange={(e) => setActiveApp(e.target.value)}
        className="app-select"
      >
        <option value="">---</option>
        <option value="notes">📝 Notes App</option>
        <option value="manager">👤 User Manager</option>
        <option value="userlist">📋 User List</option>
        <option value="mui">🎨 Material UI Demo</option>
        <option value="theme-toggle">🌓 Theme Toggle App</option>
        <option value="contacts">📇 Contacts App</option>
        <option value="sneakerstory">👟 Sneaker Story</option>
        <option value="antdform">💠 Ant Design Form App</option>
        <option value="interactive-userlist">⚡ Interactive User List</option>
      </select>

      {renderApp()}
    </div>
  );
}

export default App;
