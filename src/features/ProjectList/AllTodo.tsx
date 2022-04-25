import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { changeActiveContent } from "../activeContent/activeContentSlice";

interface Props {
  className?: string;
}

const AllTodo = ({className}: Props) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(changeActiveContent({ id: "All Todo", type: "AllTodos" }));
  };

  return (
    <h2 className={`text-white text-2xl font-bold cursor-pointer ${className}`} onClick={handleClick}>All Todo's</h2>
  );
};

export { AllTodo };
