import { configureStore } from "@reduxjs/toolkit";
import projectListReducer from "../features/ProjectList/projectListSlice";
import activeContentReducer from "../features/activeContent/activeContentSlice";
import { loadLocalStorage, saveToLocalStorage } from "./localStorage";

const localStorageState = loadLocalStorage();

export const store = configureStore({
  reducer: {
    projectList: projectListReducer,
    activeContent: activeContentReducer,
  },
  preloadedState: localStorageState,
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
