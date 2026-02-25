import { configureStore } from "@reduxjs/toolkit";
import homeReducers from '../features/homeSlice'
import cartReducers from '../features/cartSlice'


const store = configureStore({
    reducer: {
        home: homeReducers,
        cart: cartReducers
    }
})

export default store;