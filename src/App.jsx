import { useState } from 'react'
import './App.css'
import NotesApp from "./apps/MyNotesApp/NotesApp";
import UserManagerApp from "./apps/UserManagerApp/UserManagerApp";
import { Provider } from "react-redux";
import userStore from "./apps/UserManagerApp/redux/store";
import notesStore from "./apps/MyNotesApp/redux/store";


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
      </select>

      {renderApp()}
    </div>
  );
}

export default App;
