import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
 list: [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.list.push({
        id: Date.now(),
        ...action.payload,
      });
    },
    removeUser: (state, action) => {
      state.list = state.list.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
