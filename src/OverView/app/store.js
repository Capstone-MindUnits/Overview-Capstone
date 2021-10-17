import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../feature/ProductSlice';

const store = configureStore({
  reducer: {
    product: counterReducer,
  },
});

export default store;