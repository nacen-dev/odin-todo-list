import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useAppDispatch } from "../../app/hooks";
import { EditTodoModal } from "./EditTodoModal";
import { deleteTodo, toggleCompleteTodo, editTodo } from "./projectListSlice";
import { TodoDetailsModal } from "./TodoDetailsModal";
import { format } from "date-fns";

type TodoPriority = "low" | "medium" | "high";

export interface ITodo {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: TodoPriority;
  completed: boolean;
  projectName: string;
}

type ModalType = "details" | "edit";

const Todo = (props: ITodo) => {
  const { completed, dueDate, id, priority, title } = props;

  const [open, setOpen] = useState({
    details: false,
    edit: false,
  });

  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(props));
  };

  const handleToggleCompleteTodo = () => {
    dispatch(toggleCompleteTodo(props));
  };

  const handleEditTodo = (todo: ITodo) => {
    dispatch(editTodo(todo));
  };

  const priorityColor = (priority: TodoPriority) => {
    if (priority === "low") return "border-l-green-500";
    else if (priority === "medium") return "border-l-yellow-500";
    else if (priority === "high") return "border-l-red-500";
  };

  const handleOpenModal = (modal: ModalType) => {
    setOpen((prevState) => ({
      ...prevState,
      [modal]: true,
    }));
  };
  const handleCloseModal = (modal: ModalType) => {
    setOpen((prevState) => ({
      ...prevState,
      [modal]: false,
    }));
  };

  return (
    <>
      <div
        className={`grid grid-cols-[1fr_auto] p-4 items-center gap-2 bg-slate-100 rounded-md rounded-l-none border-l-4 ${priorityColor(
          priority
        )}`}
      >
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="completed"
            id={id}
            checked={completed}
            onChange={handleToggleCompleteTodo}
          />
          <p className="text-xl flex-1">{title}</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleOpenModal("details")}
            className="text-sky-700 border-2 border-sky-700 rounded px-3 text-lg hover:bg-sky-700 hover:text-white"
          >
            Details
          </button>
          <p className="text-lg md-max:hidden">
            {dueDate ? format(new Date(dueDate), "dd-MM-yyyy") : ""}
          </p>
          <button className="edit-todo" onClick={() => handleOpenModal("edit")}>
            <MdEdit className="text-sky-700 text-xl" />
          </button>
          <button className="delete-todo" onClick={handleDelete}>
            <MdDelete className="text-red-600 text-xl" />
          </button>
        </div>
      </div>
      <EditTodoModal
        onClose={() => handleCloseModal("edit")}
        open={open.edit}
        Todo={props}
        editTodo={handleEditTodo}
      />
      <TodoDetailsModal
        todo={props}
        open={open.details}
        onClose={() => handleCloseModal("details")}
      />
    </>
  );
};

export { Todo };
