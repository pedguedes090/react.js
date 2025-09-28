import { configureStore } from "@reduxjs/toolkit";
import studentreduce from "../slice/Student.slice"

export const store = configureStore({
    reducer:{
        students:studentreduce
    },
    devTools:true
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;