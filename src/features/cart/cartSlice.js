import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
  name:"cart",
  initialState:{
    items:[],
    totalItems:0,
    totalPrice:0
  },
  reducers:{
    addItem:(state,action)=>{
    const existingCartItem=state.items.find((item)=>(item.id===action.payload.id))
    if(existingCartItem){
      existingCartItem.quantity+=1;
      console.log(existingCartItem)

    }
    else{
      console.log(existingCartItem)
      state.items.push({...action.payload,quantity:1})
    }
    }
  }
});

export const {addItem}=cartSlice.actions;
export default cartSlice.reducer