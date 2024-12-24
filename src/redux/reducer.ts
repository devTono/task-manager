import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState, Filter, Task } from "../types";

const initialState: AppState = {
  tasks: [],
  filter: "ALL",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<{ id: number; updatedTask: Partial<Task> }>) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        Object.assign(task, action.payload.updatedTask);
      }
    },
    toggleComplete: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
  }
})


export const { addTask, deleteTask, updateTask, toggleComplete, setFilter } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;