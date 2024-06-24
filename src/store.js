import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice'

console.log(cartReducer)
export const store = configureStore({
    reducer:{
        cart:cartReducer,
    },
})