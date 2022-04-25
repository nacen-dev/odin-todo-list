import { nanoid } from "nanoid";
import React, { useState } from "react";
import { Modal } from "../../components/Modal";
import { ITodo } from "./Todo";
import { MdClose } from "react-icons/md";
import { TodoForm } from "./TodoForm";

type Props = {
  open: boolean;
  onClose: () => void;
  className?: string;
  projectName: string;
  addTodo: (todo: ITodo) => void;
};

const AddTodoModal = ({
  open,
  onClose,
  projectName,
  className,
  addTodo,
}: Props) => {
  const [todoInput, setTodoInput] = useState<ITodo>({
    id: nanoid(),
    completed: false,
    description: "",
    dueDate: "",
    priority: "low",
    projectName: projectName,
    title: "",
  });

  const resetTodoInput = () => {
    setTodoInput({
      id: nanoid(),
      completed: false,
      description: "",
      dueDate: "",
      priority: "low",
      projectName: projectName,
      title: "",
    });
  };

  const handleAddTodo = (todo: ITodo) => {
    addTodo(todo);
    onClose();
  };

  const handleButtonClose = (event: React.MouseEvent<SVGElement>) => {
    event.stopPropagation();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} className={`w-[60%] ${className} `}>
      <header className="bg-customBlack p-4 flex justify-between items-center">
        <p className="text-white text-2xl">New Todo</p>
        <MdClose
          onClick={handleButtonClose}
          className="text-2xl text-white cursor-pointer"
        />
      </header>

      <TodoForm
        formButtonText="Add Todo"
        onSubmit={handleAddTodo}
        projectName={projectName}
      />
    </Modal>
  );
};

export { AddTodoModal };
