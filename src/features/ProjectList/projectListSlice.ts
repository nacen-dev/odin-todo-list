import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { RootState } from "../../app/store";
import { IProject } from "./Project";
import { ITodo } from "./Todo";

export type ProjectListState = Array<IProject>;

const initialState: ProjectListState = [
  {
    name: "Home",
    todoList: [
      {
        id: nanoid(),
        completed: false,
        description: "",
        dueDate: "",
        priority: "high",
        title: "Todo-01",
        projectName: "Home",
      },
      {
        id: nanoid(),
        completed: false,
        description: "",
        dueDate: "",
        priority: "medium",
        title: "Todo-02",
        projectName: "Home",
      },
    ],
  },
  {
    name: "Work",
    todoList: [
      {
        id: nanoid(),
        completed: false,
        description: "",
        dueDate: "",
        priority: "low",
        title: "Todo-Work-01",
        projectName: "Work",
      },
    ],
  },
];

export const projectListSlice = createSlice({
  name: "projectList",
  initialState: initialState,
  reducers: {
    addProject: (state, action: PayloadAction<IProject>) => {
      state.push(action.payload);
    },
    removeProject: (state, action: PayloadAction<{ projectName: string }>) => {
      state = state.filter(
        (project) => project.name !== action.payload.projectName
      );
    },
    editProjectName: (
      state,
      action: PayloadAction<{ projectName: string; newName: string }>
    ) => {
      let project = state.find(
        (project) => project.name === action.payload.projectName
      );
      if (project) {
        project.name = action.payload.newName;
      }
    },
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state
        .find((todoList) => todoList.name === action.payload.projectName)
        ?.todoList.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<ITodo>) => {
      let project = state.find(
        (project) => project.name === action.payload.projectName
      );
      if (project) {
        project.todoList = project.todoList.filter(
          (todo) => todo.id !== action.payload.id
        );
      }
    },
    editTodo: (state, action: PayloadAction<ITodo>) => {
      let project = state.find((p) => p.name === action.payload.projectName);
      if (project) {
        project.todoList = project.todoList.map((todo) => {
          console.log(action.payload.id, todo.id);
          if (todo.id === action.payload.id) {
            return action.payload;
          }
          return todo;
        });
      }
    },
    toggleCompleteTodo: (state, action: PayloadAction<ITodo>) => {
      let project = state.find(
        (project) => project.name === action.payload.projectName
      );
      if (project) {
        let todo = project.todoList.find(
          (todo) => todo.id === action.payload.id
        );
        if (todo) todo.completed = !todo.completed;
      }
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  editProjectName,
  addProject,
  removeProject,
  toggleCompleteTodo,
  editTodo,
} = projectListSlice.actions;

export const selectProjectList = (state: RootState) => state.projectList;
export const selectProjectNames = (state: RootState) => {
  return state.projectList.map((project) => project.name);
};

export default projectListSlice.reducer;
