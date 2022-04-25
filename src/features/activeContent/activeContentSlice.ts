import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface ActiveContent {
  id: string;
  type: "Project" | "AllTodos";
}

const initialState: ActiveContent = {
  id: "Home",
  type: "Project",
};

export const activeContentSlice = createSlice({
  name: "activeContent",
  initialState: initialState,
  reducers: {
    changeActiveContent: (state, action: PayloadAction<ActiveContent>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { changeActiveContent } = activeContentSlice.actions;

export const selectActiveContent = (state: RootState) => state.activeContent;

export default activeContentSlice.reducer;
