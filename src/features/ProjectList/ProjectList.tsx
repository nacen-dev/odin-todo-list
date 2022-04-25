import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeActiveContent } from "../activeContent/activeContentSlice";
import { addProject, selectProjectList } from "./projectListSlice";

interface Props {}

const ProjectList = (props: Props) => {
  const [projectName, setProjectName] = useState("");
  const [isInputOpen, setIsInputOpen] = useState(false);
  const dispatch = useAppDispatch();
  const projectList = useAppSelector(selectProjectList);

  const handleChangeContent = (name: string) => {
    dispatch(changeActiveContent({ id: name, type: "Project" }));
  };

  const handleAddNewProject = (projectName: string) => {
    dispatch(addProject({ name: projectName, todoList: [] }));
    setIsInputOpen(false);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(event.target.value);
  };

  return (
    <div>
      <ul className="flex flex-col gap-2 ml-4 my-2">
        {projectList.map((project) => (
          <li
            key={project.name}
            onClick={() => handleChangeContent(project.name)}
            className="text-white cursor-pointer text-xl"
          >
            {project.name}
          </li>
        ))}
      </ul>

      {isInputOpen ? (
        <div className="mt-2">
          <div>
            <label htmlFor="new-project-input" className="text-white">
              Project Name:
            </label>
            <input
              className="rounded px-1 w-full"
              type="text"
              id="new-project-input"
              value={projectName}
              onChange={handleTextChange}
              maxLength={40}
            />
          </div>

          <div className="flex gap-3 mt-3">
            <button
              onClick={() => handleAddNewProject(projectName)}
              className="rounded text-lg w-full bg-green-600 text-white"
            >
              Add
            </button>
            <button
              onClick={() => setIsInputOpen(false)}
              className="rounded text-lg w-full bg-red-600 text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          className="flex items-center gap-2 text-white cursor-pointer"
          type="button"
          onClick={() => setIsInputOpen(true)}
        >
          <MdAdd className="text-xl" />
          <span className="text-lg">New Project</span>
        </button>
      )}
    </div>
  );
};

export { ProjectList };
