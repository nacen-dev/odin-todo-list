import React from "react";
import { AllTodo } from "../features/ProjectList/AllTodo";
import { ProjectList } from "../features/ProjectList/ProjectList";

type Props = {
  className?: string;
};

const Sidebar = ({ className }: Props) => {
  return (
    <aside className={`p-4 w-full bg-slate-700 ${className}`}>
      <AllTodo className="mb-2" />
      <h2 className="text-white text-2xl font-bold">Projects</h2>
      <ProjectList />
    </aside>
  );
};

export { Sidebar };
