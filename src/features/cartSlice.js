import { createSlice } from "@reduxjs/toolkit"
import toast from 'react-hot-toast';


const initialState = {
    cart: [],
}

const saveToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            const { product, id } = action.payload

            let isAvailable = state.cart.find((product) => product.id === id);

            if (isAvailable) {
                toast.error("This item is already in your cart.")
                return;
            }
            state.cart.push(product);
            saveToLocalStorage(state.cart);
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;

            state.cart = state.cart.filter((product) => product.id !== id);
            saveToLocalStorage(state.cart);
        },
        handleQuantity: (state, action) => {
            const { id, num } = action.payload;

            state.cart = state.cart.map((product) => {
                if (product.id === id) {
                    product.quantity += num;

                    if (product.quantity > 10) {
                        product.quantity = 10
                        toast.error("Maximum limit reached for this product.")
                    }

                    return product;
                }
                return product;
            })
            saveToLocalStorage(state.cart);
        },
        emptyCart: (state, action) => {
            state.cart = [];
            localStorage.removeItem('cart');
        },
        getLocalStorageData: (state) => {
            const storedCart = localStorage.getItem('cart');

            if (storedCart) {
                state.cart = JSON.parse(storedCart);
            }
        }
    }
})

export const { addToCart, removeFromCart, handleQuantity, emptyCart, getLocalStorageData } = cartSlice.actions

export default cartSlice.reducer