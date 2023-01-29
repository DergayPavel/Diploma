import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersArr: [],
  abcd: "123123",
};

const coinSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    changeString: (state, action) => {
      state.abcd = action.payload.newString;
    },
    addUsers: (state, action) => {
      state.usersArr = action.payload.newArray;
    },
    deleteUser: (state, action) => {
      state.usersArr = state.usersArr.filter(
        (user: any) => user.id !== action.payload.userId
      );
    },
  },
});

export const { changeString, addUsers, deleteUser } = coinSlice.actions;

export const coinReducer = coinSlice.reducer;