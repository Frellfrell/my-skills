import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_Note } from "../../redux/notesSlice";
import styles from "./NoteForm.module.css";

function NoteForm() {
    const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !text.trim()) return;

    dispatch(add_Note({ title, text }));
    setTitle("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />
      <textarea
        placeholder="Текст заметки..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.textarea}
      />
      <button type="submit" className={styles.button}>Add</button>
    </form>
  );
}

export default NoteForm;

