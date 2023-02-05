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
    },
    delateWallet(state, action){
      let newArr=[] as any;
      state.wallet.forEach((item:any)=>{
        if(item!==action.payload.data){
          newArr.push(item)
        }
      })  
      state.wallet=newArr
    },
  }

});

export const {addWallet,delateWallet} =coinsSlice.actions;
export default coinsSlice.reducer
