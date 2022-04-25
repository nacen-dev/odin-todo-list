import React, { useState } from "react";
import { ITodo, Todo } from "./Todo";
import { MdAdd } from "react-icons/md";
import { useAppDispatch } from "../../app/hooks";
import { addTodo } from "./projectListSlice";
import { AddTodoModal } from "./AddTodoModal";

export interface IProject {
  name: string;
  todoList: Array<ITodo>;
}

const Project = ({ name, todoList }: IProject) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);

  const handleCloseModal = () => setOpen(false);

  const handleOpenModal = () => setOpen(true);

  const handleAddTodo = (todo: ITodo) => {
    dispatch(addTodo(todo));
  };

  return (
    <>
      <ul className="flex flex-col gap-3 mb-4">
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
      <button
        className="flex items-center gap-2 text-white cursor-pointer"
        type="button"
        onClick={handleOpenModal}
      >
        <MdAdd className="text-xl" />
        <span className="text-lg">New Todo</span>
      </button>
      <AddTodoModal
        onClose={handleCloseModal}
        open={open}
        projectName={name}
        addTodo={handleAddTodo}
      />
    </>
  );
};

export { Project };
