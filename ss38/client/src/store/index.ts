import { configureStore } from "@reduxjs/toolkit";
import bookreduce from "../slice/Book.slice"

export const store = configureStore({
    reducer:{
        books:bookreduce
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;