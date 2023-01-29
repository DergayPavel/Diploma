import { configureStore } from "@reduxjs/toolkit";
import { coinReducer } from "../Reducer/coinSlice";

export const store = configureStore({
  reducer: {
    cooin: coinReducer,
  },
});