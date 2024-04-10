import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : "cart",
    initialState : {
        items : ["x","y"],
    },
    reducers : {
        addItem : (state,action) => state.cart.push(action.payload),
        removeItem : (state,action) => state.cart.pop(),
        clearCart : (state,action) => state.cart.length=0,
    }
  });

export const{addItem,removeItem,clearCart} = CartSlice.actions;  
export default CartSlice.reducer;  