import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../app/hooks";
import { selectProjectList } from "../features/ProjectList/projectListSlice";
import { changeActiveContent } from "../features/activeContent/activeContentSlice";

type Props = {};

const Sidebar = (props: Props) => {
  const dispatch = useDispatch();
  const projectList = useAppSelector(selectProjectList);

  const handleChangeContent = (name: string) => {
    dispatch(changeActiveContent({ id: name, type: "Project" }));
  };

  return (
    <aside className="p-4 w-[200px] bg-slate-700">
      <h2 className="text-white text-2xl font-bold">Projects</h2>
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
    </aside>
  );
};

export { Sidebar };
