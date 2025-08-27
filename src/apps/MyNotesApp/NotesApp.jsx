import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";
import styles from "./NotesApp.module.css";

const NotesApp = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <Header />
        <Main>
          <div className={styles.notesCard}>
            <NoteForm />
            <NoteList />
          </div>
        </Main>
        <Footer />
      </div>
    </Provider>
  );
};

     
export default NotesApp;
