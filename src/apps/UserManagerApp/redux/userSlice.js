import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Гость",
  status: "Не авторизован",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.name = action.payload.name;
      state.status = action.payload.status;
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
