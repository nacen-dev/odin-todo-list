import React from "react";
import { ProjectList } from "../features/ProjectList/ProjectList";

type Props = {};

const Sidebar = (props: Props) => {
  
  return (
    <aside className="p-4 w-[200px] bg-slate-700">
      <h2 className="text-white text-2xl font-bold">Projects</h2>
      <ProjectList />
    </aside>
  );
};

export { Sidebar };
