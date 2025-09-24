import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';



const interactiveUserListStore = configureStore({
  reducer: {
    users: usersReducer,
  },
});
    

export default interactiveUserListStore;