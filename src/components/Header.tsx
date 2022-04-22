import React from "react";
import { BiTask } from "react-icons/bi";

type Props = {
  className: string;
};

const Header = ({ className }: Props) => {
  return (
    <header className={`bg-customBlack p-4 ${className}`}>
      <div className="flex items-center gap-2">
        <p className="text-white text-2xl">Todo List</p>
        <BiTask className="text-white text-3xl" />
      </div>
    </header>
  );
};

export { Header };
