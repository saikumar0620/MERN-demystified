import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/Counterslice"
import cartReducer from "../features/cart/cartSlice"

 export const store=configureStore({

  reducer:{
    counter:counterReducer,
     cart:cartReducer
  }
})