import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../utils/types";
import axios from "axios";

const initialState = {
    products: [] as Product[],
    loading: false,
    error: null as string | null,
}

export const getAllProducts = createAsyncThunk('product/getAllProducts', async () => {
    const res = await axios.get('http://localhost:8000/products');
    return res.data;
})

export const addProduct = createAsyncThunk('product/addProduct', async (product: Omit<Product, 'id'>) => {
    await axios.post('http://localhost:8000/products', product);
    const res = await fetch('http://localhost:8000/products');
    const data = await res.json();
    return data;
})

export const deleteProduct = createAsyncThunk('product/deleteProduct', async (id: number) => {
    await axios.delete(`http://localhost:8000/products/${id}`);
    const res = await fetch('http://localhost:8000/products');
    const data = await res.json();
    return data;
})
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch products';
            })

            .addCase(addProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(deleteProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
                state.error = null;
            })
    }
})

export default productSlice.reducer;