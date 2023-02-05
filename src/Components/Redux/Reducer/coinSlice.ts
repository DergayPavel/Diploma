import { createSlice } from "@reduxjs/toolkit";

const initialState={
  coinsArray:['b','b'],
  myCount:1
}

const coinsSlice = createSlice({
  name:'coins',
  initialState,
  reducers:{
    createCoins(state, action){
      console.log('Create Post')
      console.log('store',state);
      console.log('action',action);
      state.coinsArray.push('a');
    }
  }

});

export const {createCoins} =coinsSlice.actions;
export default coinsSlice.reducer
