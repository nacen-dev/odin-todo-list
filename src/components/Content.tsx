import React from "react";
import { useAppSelector } from "../app/hooks";
import { selectActiveContent } from "../features/activeContent/activeContentSlice";
import { Project } from "../features/ProjectList/Project";

type Props = {};

const Content = (props: Props) => {
  const activeContent = useAppSelector(selectActiveContent);
  const selectProject = useAppSelector((state) => {
    let project = state.projectList.find(
      (project) => project.name === activeContent.id
    );
    return project ? project : state.projectList[0];
  });

  return (
    <main className="bg-slate-600 h-screen p-4">
      <Project name={selectProject.name} todoList={selectProject.todoList} />
    </main>
  );
};

export { Content };
