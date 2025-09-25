import {configureStore} from '@reduxjs/toolkit';
import taskListReducer from '../slice/TaskList.slices';

export const store = configureStore({
    reducer: {
        taskList: taskListReducer
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;