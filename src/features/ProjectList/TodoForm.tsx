import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectProjectNames } from "./projectListSlice";
import { ITodo } from "./Todo";

interface Props {
  onSubmit: (todoInput: ITodo) => void;
  formButtonText: string;
  projectName: string;
  Todo?: ITodo;
}

const TodoForm = ({ onSubmit, formButtonText, projectName, Todo }: Props) => {
  const projectNames = useAppSelector(selectProjectNames);

  const initialState: ITodo = {
    id: nanoid(),
    completed: false,
    description: "",
    dueDate: "",
    priority: "low",
    projectName: projectName ? projectName : projectNames[0],
    title: "",
  };

  const [todoInput, setTodoInput] = useState<ITodo>(Todo ? Todo : initialState);
  const [errorOnInput, setErrorOnInput] = useState(false);

  const validateInput = () => {
    if (
      todoInput.title &&
      todoInput.projectName &&
      /\d{4}-\d{2}-\d{2}/.test(todoInput.dueDate)
    ) {
      return true;
    }
    return false;
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setTodoInput((prevTodoInput) => ({
      ...prevTodoInput,
      [event.target.name]: event.target.value,
    }));
  };

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

  const handleSubmit = () => {
    if (validateInput()) {
      onSubmit(todoInput);
      resetTodoInput();
      setErrorOnInput(false);
    } else {
      setErrorOnInput(true);
    }
  };

  return (
    <form className="p-4 flex flex-col gap-3">
      <div>
        <label
          htmlFor="title"
          className={`text-xl ${
            errorOnInput ? "text-red-700 text-2xl scale-50" : ""
          }`}
        >
          Title: *
        </label>
        <input
          id="title"
          type="text"
          name="title"
          value={todoInput.title}
          onChange={handleChange}
          required
          className="px-2 border border-slate-600 hover:border-customBlack focus:border-customBlack w-full rounded"
        />
      </div>

      <div>
        <label
          className={`text-xl ${errorOnInput && "text-red-700"}`}
          htmlFor="projectNameDropdown"
        >
          Project: *{" "}
        </label>
        <select
          id="projectNameDropdown"
          className="border border-slate-600"
          name="projectName"
          value={todoInput.projectName}
          onChange={handleChange}
          required
        >
          <option value="">Select Project</option>
          {projectNames.map((projectName) => (
            <option key={projectName} value={projectName}>
              {projectName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="description" className="text-xl">
          Description:
        </label>
        <textarea
          name="description"
          id="description"
          className="resize-none border border-slate-600 py-1 px-2 rounded h-[100px] w-full"
          maxLength={255}
          value={todoInput.description}
          onChange={handleChange}
        />
      </div>

      <div className="flex gap-2 items-center">
        <label className="text-xl">Due Date:</label>
        <input
          type="date"
          className="border px-2 rounded uppercase cursor-pointer border-slate-600"
          value={todoInput.dueDate}
          onChange={handleChange}
          name="dueDate"
          required
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <label className="text-xl">Priority:</label>
          <div>
            <input
              name="priority"
              type="radio"
              value="low"
              className="opacity-0 peer absolute"
              checked={todoInput.priority === "low"}
              onChange={handleChange}
              id="priority-low"
            />
            <label
              htmlFor="priority-low"
              className="cursor-pointer border border-green-600 py-1 px-2 rounded text-green-700 hover:bg-green-700 hover:text-white peer-checked:bg-green-700 peer-checked:text-white"
            >
              Low
            </label>
          </div>
          <div>
            <input
              name="priority"
              type="radio"
              value="medium"
              className="opacity-0 peer absolute"
              checked={todoInput.priority === "medium"}
              onChange={handleChange}
              id="priority-medium"
            />
            <label
              htmlFor="priority-medium"
              className="cursor-pointer border border-yellow-600 py-1 px-2 rounded text-yellow-700 hover:bg-yellow-700 hover:text-white peer-checked:bg-yellow-700 peer-checked:text-white"
            >
              Medium
            </label>
          </div>
          <div>
            <input
              name="priority"
              type="radio"
              value="high"
              className="opacity-0 peer absolute"
              checked={todoInput.priority === "high"}
              onChange={handleChange}
              id="priority-high"
            />
            <label
              htmlFor="priority-high"
              className="cursor-pointer border border-red-600 py-1 px-2 rounded text-red-700 hover:bg-red-700 hover:text-white peer-checked:bg-red-700 peer-checked:text-white"
            >
              High
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="py-1 px-2 uppercase text-lg border rounded bg-customBlack text-white"
          onClick={handleSubmit}
        >
          {formButtonText}
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
