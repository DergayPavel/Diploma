import { createSlice } from "@reduxjs/toolkit";

const initialState={
  wallet:[] as any
}

const coinsSlice = createSlice({
  name:'coins',
  initialState,
  reducers:{
    addWallet(state, action){
      state.wallet.push(action.payload.data)
    }
  }

});

export const {addWallet} =coinsSlice.actions;
export default coinsSlice.reducer
