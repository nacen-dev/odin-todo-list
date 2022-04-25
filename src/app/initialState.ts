import { nanoid } from "nanoid";

export const initialState = {
  projectList: [
    {
      name: "Home",
      todoList: [
        {
          projectName: "Home",
          id: nanoid(),
          completed: false,
          description: "",
          dueDate: "2022-04-27",
          priority: "high",
          title: "Study",
        },
        {
          projectName: "Home",
          id: nanoid(),
          completed: false,
          description: "",
          dueDate: "2022-04-27",
          priority: "low",
          title: "Exercise for 25 minutes",
        },
        {
          projectName: "Home",
          id: nanoid(),
          completed: false,
          description: "",
          dueDate: "2022-04-27",
          priority: "low",
          title: "Meditate for 5 minutes",
        },
      ],
    },
    {
      name: "Work",
      todoList: [
        {
          projectName: "Home",
          id: nanoid(),
          completed: false,
          description: "",
          dueDate: "2022-04-27",
          priority: "high",
          title: "Create Report",
        },
        {
          projectName: "Home",
          id: nanoid(),
          completed: false,
          description: "",
          dueDate: "2022-04-26",
          priority: "medium",
          title: "Meeting",
        },
      ],
    },
  ],
  activeContent: {
    type: "AllTodos",
  },
};
