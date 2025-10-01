// src/features/productSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type ProductStatus = "active" | "inactive";

export interface Product {
  id: string;
  code: string;
  name: string;
  category: string;
  price: number;
  image: string;
  status: ProductStatus;
}

interface ProductState {
  products: Product[];
  status: "idle" | "pending" | "fulfilled" | "rejected";
}

const initialState: ProductState = {
  products: [],
  status: "idle",
};

// --- Async actions ---
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const res = await axios.get("http://localhost:3000/product");
    return res.data;
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (newProduct: Product) => {
    const res = await axios.post("http://localhost:3000/product", newProduct);
    return res.data;
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (updatedProduct: Product) => {
    const res = await axios.put(
      `http://localhost:3000/product/${updatedProduct.id}`,
      updatedProduct
    );
    return res.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id: string) => {
    await axios.delete(`http://localhost:3000/product/${id}`);
    return id;
  }
);

// --- Slice ---
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(fetchProduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.products = action.payload;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.status = "rejected";
      })

      // ADD
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })

      // UPDATE
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (p) => p.id === action.payload.id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })

      // DELETE
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((p) => p.id !== action.payload);
      });
  },
});

export default productSlice.reducer;
