import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeActiveContent } from "../activeContent/activeContentSlice";
import { selectProjectList } from "./projectListSlice";

interface Props {}

const ProjectList = (props: Props) => {
  const dispatch = useAppDispatch();
  const projectList = useAppSelector(selectProjectList);

  const handleChangeContent = (name: string) => {
    dispatch(changeActiveContent({ id: name, type: "Project" }));
  };

  return (
    <div>
      <ul className="flex flex-col gap-2 ml-4 mt-2">
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
    </div>
  );
};

export { ProjectList };
