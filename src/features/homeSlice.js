import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        const updatedProduct = data.map((d) => (
            {
                ...d, 
                rating: Math.floor(Math.random() * 10), 
                reviews: Math.floor(Math.random() * 1000) + 1, 
                discount: Math.floor(Math.random() * 50) + 1,
                quantity: 1
            }
        ))
        
        return updatedProduct
    } catch (error) {
        throw error
    }
})


const initialState = {
    products: [],
    isLoading: true,
    isError: false
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) =>{
            state.isLoading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;           
            
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        })
    }
})

export const {} = homeSlice.actions

export default homeSlice.reducer