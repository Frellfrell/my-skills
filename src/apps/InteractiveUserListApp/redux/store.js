import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './userSlice';



const interactiveUserListStore = configureStore({
  reducer: {
    users: usersReducer,
  },
});
    

export default interactiveUserListStore;