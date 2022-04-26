import React from "react";
import { MdClose } from "react-icons/md";
import { IModal, Modal } from "../../components/Modal";
import { ITodo } from "./Todo";

interface Props extends IModal {
  todo: ITodo;
}

const TodoDetailsModal = ({ open, onClose, className, todo }: Props) => {
  const handleButtonClose = (event: React.MouseEvent<SVGElement>) => {
    event.stopPropagation();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} className={`md-max:w-[80%] md:w-[600px] ${className} `}>
      <header className="bg-customBlack p-4 flex justify-between items-center">
        <p className="text-white text-2xl">Details</p>
        <MdClose
          onClick={handleButtonClose}
          className="text-2xl text-white cursor-pointer"
        />
      </header>
      <div className="p-4">
        <p className="text-2xl font-bold w-full text-customBlack">
          {todo.title}
        </p>
        <div className="flex flex-col gap-2 mt-2">
          <div className="grid grid-cols-[auto_1fr] gap-2 text-lg items-end">
            <span className="text-lg font-semibold">Description: </span>
            <p className="self-center">{todo.description}</p>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-2 text-lg items-end">
            <span className="text-lg font-semibold">Project: </span>
            <p className="self-center">{todo.projectName}</p>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-2 text-lg items-end">
            <span className="text-lg font-semibold">Priority: </span>
            <p className="self-center">{`${todo.priority[0].toUpperCase()}${todo.priority.slice(
              1
            )}`}</p>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-2 text-lg items-end">
            <span className="text-lg font-semibold">Due Date: </span>
            <p className="self-center">{todo.dueDate}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export { TodoDetailsModal };
