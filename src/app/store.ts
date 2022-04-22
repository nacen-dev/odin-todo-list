import { configureStore } from "@reduxjs/toolkit";
import projectListReducer from "../features/ProjectList/projectListSlice";
import activeContentReducer from "../features/activeContent/activeContentSlice";

export const store = configureStore({
  reducer: {
    projectList: projectListReducer,
    activeContent: activeContentReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
