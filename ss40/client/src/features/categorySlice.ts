import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type CategoryStatus = "active" | "inactive";

export interface Category {
  id: string;
  name: string;
  description: string;
  status: CategoryStatus;
}

interface CategoryState {
  categories: Category[];
  status: "idle" | "pending" | "fulfilled" | "rejected";
}

const initialState: CategoryState = {
  categories: [],
  status: "idle",
};

export const fetchCategory = createAsyncThunk("category/fetch", async () => {
  const res = await axios.get("http://localhost:3000/category");
  return res.data;
});

export const addCategory = createAsyncThunk(
  "category/add",
  async (newCategory: Category) => {
    const res = await axios.post("http://localhost:3000/category", newCategory);
    return res.data;
  }
);

export const updateCategory = createAsyncThunk(
  "category/update",
  async (updated: Category) => {
    const res = await axios.put(
      `http://localhost:3000/category/${updated.id}`,
      updated
    );
    return res.data;
  }
);

export const deleteCategory = createAsyncThunk(
  "category/delete",
  async (id: string) => {
    await axios.delete(`http://localhost:3000/category/${id}`);
    return id;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.categories = action.payload;
      })
      .addCase(fetchCategory.rejected, (state) => {
        state.status = "rejected";
      })

      .addCase(addCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })

      .addCase(updateCategory.fulfilled, (state, action) => {
        const idx = state.categories.findIndex(
          (c) => c.id === action.payload.id
        );
        if (idx !== -1) state.categories[idx] = action.payload;
      })

      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          (c) => c.id !== action.payload
        );
      });
  },
});

export default categorySlice.reducer;
