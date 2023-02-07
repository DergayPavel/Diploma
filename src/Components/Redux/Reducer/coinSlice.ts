import { createSlice } from "@reduxjs/toolkit";

const initialState={
  wallet:[] as Array<Array<string>>
}

const coinsSlice = createSlice({
  name:'coins',
  initialState,
  reducers:{
    addWallet(state, action){
      state.wallet.push([action.payload.data,action.payload.image])
    },

    delateWallet(state, action){
      let newArr=[] as Array<Array<string>>;
      state.wallet.forEach((item:Array<string>,index:number)=>{
        if(item[0]!==action.payload.data){
          newArr.push(item)
        }
      })  
      state.wallet=newArr
    },
  }

});

export const {addWallet,delateWallet} =coinsSlice.actions;
export default coinsSlice.reducer
