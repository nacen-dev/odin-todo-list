import React from "react";
import { useAppSelector } from "../app/hooks";
import { selectActiveContent } from "../features/activeContent/activeContentSlice";
import { Project } from "../features/ProjectList/Project";
import { selectAllTodo } from "../features/ProjectList/projectListSlice";

type Props = {};

const Content = (props: Props) => {
  const activeContent = useAppSelector(selectActiveContent);
  const selectContent = useAppSelector((state) => {
    let project = state.projectList.find(
      (project) => project.name === activeContent.id
    );
    return project;
  });

  const allTodo = useAppSelector(selectAllTodo);

  return (
    <main className="bg-slate-600 p-4 overflow-y-auto">
      {selectContent ? (
        <Project name={selectContent.name} todoList={selectContent.todoList} />
      ) : <Project name="" todoList={allTodo} />}
      
    </main>
  );
};

export { Content };
