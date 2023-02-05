import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from '../Reducer/coinSlice'

export const store = configureStore({
  reducer: {
    coins: coinsReducer, 
  },
});