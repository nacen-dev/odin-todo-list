import React from "react";
import { BiTask } from "react-icons/bi";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-customBlack p-4">
      <div className="flex items-center gap-2">
        <p className="text-white text-2xl">Todo List</p>
        <BiTask className="text-white text-3xl" />
      </div>
    </header>
  );
};

export { Header };
