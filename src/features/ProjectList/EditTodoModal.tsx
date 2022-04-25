import React from "react";
import { MdClose } from "react-icons/md";
import { Modal } from "../../components/Modal";
import { ITodo } from "./Todo";
import { TodoForm } from "./TodoForm";

interface Props {
  open: boolean;
  onClose: () => void;
  className?: string;
  Todo: ITodo;
  editTodo: (Todo: ITodo) => void;
}

const EditTodoModal = ({ open, onClose, className, Todo, editTodo }: Props) => {
  const handleButtonClose = (event: React.MouseEvent<SVGElement>) => {
    event.stopPropagation();
    onClose();
  };

  const handleEdit = (todo: ITodo) => {
    console.log(todo);
    editTodo(todo);
    onClose();
  }

  return (
    <Modal open={open} onClose={onClose} className={`w-[60%] ${className} `}>
      <header className="bg-customBlack p-4 flex justify-between items-center">
        <p className="text-white text-2xl">Edit Todo</p>
        <MdClose
          onClick={handleButtonClose}
          className="text-2xl text-white cursor-pointer"
        />
      </header>
      <TodoForm Todo={Todo} formButtonText="Edit Todo" projectName={Todo.projectName} onSubmit={handleEdit} />
    </Modal>
  );
};

export { EditTodoModal };
