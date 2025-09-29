import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


interface Book {
    id: string;
    title: string;
    author: string;
    year: number;
    category: string;
}
export const fetchBooks = createAsyncThunk(
    "books/fetchBooks",
    async () => {
        const response = await axios.get("http://localhost:3000/books");
        return response.data;
    }
);
export const addBook = createAsyncThunk(
    "books/addBook",
    async (newBook: Book) => {
        const response = await axios.post("http://localhost:3000/books", newBook);
        return response.data;
    }
);
export const updateBook = createAsyncThunk(
    "books/updateBook",
    async (updatedBook: Book) => {
        const response = await axios.put(`http://localhost:3000/books/${updatedBook.id}`, updatedBook);
        return response.data;
    }
);
export const deleteBook = createAsyncThunk(
    "books/deleteBook",
    async (id: string) => {
        await axios.delete(`http://localhost:3000/books/${id}`);
        return id;
    }
);
const bookSlice = createSlice({
    name: "Book",
    initialState: {
        books: [] as Book[],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.loading = false;
                state.books = action.payload;
            })
            .addCase(fetchBooks.rejected, (state) => {
                state.loading = false;
            })
            .addCase(addBook.pending, (state) => {
                state.loading = true;
            })
            .addCase(addBook.fulfilled, (state, action) => {
                state.loading = false;
                state.books.push(action.payload);
            })
            .addCase(addBook.rejected, (state) => {
                state.loading = false;
            })
            .addCase(updateBook.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateBook.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.books.findIndex((b) => b.id === action.payload.id);
                if (index !== -1) {
                    state.books[index] = action.payload;
                }
            })
            .addCase(updateBook.rejected, (state) => {
                state.loading = false;
            })
            .addCase(deleteBook.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteBook.fulfilled, (state, action) => {
                state.loading = false;
                state.books = state.books.filter((b) => b.id !== action.payload);
            })
            .addCase(deleteBook.rejected, (state) => {
                state.loading = false;
            });

    }
})

export default bookSlice.reducer;