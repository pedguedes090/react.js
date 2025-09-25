import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "../store";

interface Task {
    id: string;
    title: string; 
    completed: boolean;
    priority: 'low' | 'medium' | 'high';
}



export const fetchTasks = createAsyncThunk(
    "tasks/fetchTasks",
    async () => {
        try{
            const response = await axios.get("http://localhost:3000/task");
            const tasks: Task[] = response.data || [];
            return tasks;
        } catch (error) {
            console.error("Failed to fetch tasks:", error);
        }
    }
);
export const addData = createAsyncThunk(
    "tasks/addData",
    async (newTask: Task) => {
        try {
            const response = await axios.post("http://localhost:3000/task", newTask);
            return response.data;
        } catch (error) {
            console.error("Failed to add task:", error);
        }
    }
)
export const deleteData = createAsyncThunk(
    "tasks/deleteData",
    async (taskId: string) => {
        try {
            const response = await axios.delete(`http://localhost:3000/task/${taskId}`);
            return response.data;
        } catch (error) {
            console.error("Failed to delete task:", error);
        }
    }
)
export const completedData = createAsyncThunk(
    "tasks/completedData",
    async (taskId: string) => {
        try {
            const response = await axios.get(`http://localhost:3000/task/${taskId}`);
            const checkBox = response.data.completed;
            const response2 = await axios.patch(`http://localhost:3000/task/${taskId}`, {
                completed: !checkBox,
            });
            return response2.data;
        } catch (error) {
            console.error("Failed to complete task:", error);
        }
    }
)
const taskListSlice = createSlice({
    name: "taskList",
    initialState: {
        data: [] as Task[],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload ?? [];
            })
            .addCase(fetchTasks.rejected, (state) => {
                state.loading = false;
            })
            .addCase(addData.pending, (state) => {
                state.loading = true;
            })
            .addCase(addData.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    state.data.push(action.payload);
                }
            })
            .addCase(addData.rejected, (state) => {
                state.loading = false;
            })
            .addCase(deleteData.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteData.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    state.data = state.data.filter(task => task.id !== action.payload.id);
                }
            })
            .addCase(completedData.rejected, (state) => {
                state.loading = false;
            })
            .addCase(completedData.pending, (state) => {
                state.loading = true;
            })
            .addCase(completedData.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    const index = state.data.findIndex(task => task.id === action.payload.id);
                    if (index !== -1) {
                        state.data[index] = action.payload;
                    }
                }
            });
    }
});

export const selectTaskList = (state: RootState) => state.taskList;

export default taskListSlice.reducer;