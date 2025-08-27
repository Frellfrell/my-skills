import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    add_Note: (state, action) => {
      state.push({ id: Date.now(), ...action.payload });
    },
    update_Note: (state, action) => {
      const { id, title, text } = action.payload;
      const note = state.find(n => n.id === id);
      if (note) {
        note.title = title;
        note.text = text;
      }
    },
    delete_Note: (state, action) => {
      return state.filter(n => n.id !== action.payload);
    },
  },
});

export const { add_Note, update_Note, delete_Note } = notesSlice.actions;
export default notesSlice.reducer;
