// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import { bloodReducer } from "./bloodReducer";  // Ensure this path is correct

const store = configureStore({
  reducer: {
    auth: authReducer,
    blood: bloodReducer,  // Ensure this matches the key in your authSlice
  },
});

export default store;
