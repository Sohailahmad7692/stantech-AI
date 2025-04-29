import { configureStore } from '@reduxjs/toolkit';
import postsReducer from "./slices/postsSlice";
import filterReducer from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    filter: filterReducer,
  },
});