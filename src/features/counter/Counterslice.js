// // features/counter/counterSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const counterSlice = createSlice({
//   name: 'counter',         // unique name for this slice
//   initialState: {
//     value: 0,
//   },
//   reducers: {
  
//     increment: (state) => {
//       state.value += 1;    // looks like mutation, but it's safe ✅
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     reset: (state) => {
//       state.value = 0;
//     },
//     // Reducer with a payload — receives data from dispatch
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;  // action.payload = value you pass in
//     },
//   },
// });

// // Export the auto-generated action creators
// export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

// // Export the reducer to register in the store
// export default counterSlice.reducer;




import {createSlice} from "@reduxjs/toolkit"

const counterSlice=createSlice({
  name:"counter",
  initialState:{value:0},

  reducers:{
    increment:(state)=>{state.value +=1},
    decrement:(state)=>{state.value -=1},
    reset:(state)=>{state.value=0}
  }
});
export const{increment,decrement,reset}=counterSlice.actions
export default counterSlice.reducer