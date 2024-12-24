import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./reducer";

// 단일 리듀서 또는 객체 형태로 전달
const store = configureStore({
  reducer: taskReducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;