import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

type TodoPriority = "low" | "medium" | "high";

export interface ITodo {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: TodoPriority;
  completed: boolean;
}

const Todo = ({
  id,
  title,
  description,
  dueDate,
  priority,
  completed,
}: ITodo) => {

  const priorityColor = (priority: TodoPriority) => {
    if (priority === "low") return "border-l-green-500";
    else if (priority === "medium") return "border-l-yellow-500";
    else if (priority === "high") return "border-l-red-500";
  };

  return (
    <div
      className={`flex p-4 items-center gap-2 bg-slate-100 rounded-md rounded-l-none border-l-4 ${priorityColor(
        priority
      )}`}
    >
      <input
        type="checkbox"
        name="completed"
        id={id}
        checked={completed}
      />
      <p className="text-xl flex-1">{title}</p>
      <div className="flex items-center gap-3">
        <button className="text-sky-700 border-2 border-sky-700 rounded px-3 text-lg hover:bg-sky-700 hover:text-white">
          Details
        </button>
        <p className="text-lg">{dueDate}</p>
        <button className="edit-todo">
          <MdEdit className="text-sky-700 text-xl" />
        </button>
        <button
          className="delete-todo"
        >
          <MdDelete className="text-red-600 text-xl" />
        </button>
      </div>
    </div>
  );
};

export { Todo };
