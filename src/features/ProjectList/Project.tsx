import React from "react";
import { ITodo, Todo } from "./Todo";

export interface IProject {
  name: string;
  todoList: Array<ITodo>;
}

const Project = ({name, todoList}: IProject) => {
  return (
    <ul className="flex flex-col gap-3">
      {todoList.map((todo) => (
        <li key={todo.id}>
          <Todo
            projectName={name}
            id={todo.id}
            completed={todo.completed}
            description={todo.description}
            dueDate={todo.dueDate}
            priority={todo.priority}
            title={todo.title}
          />
        </li>
      ))}
    </ul>
  );
};

export { Project };
