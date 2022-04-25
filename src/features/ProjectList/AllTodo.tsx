import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { changeActiveContent } from "../activeContent/activeContentSlice";

interface Props {}

const AllTodo = (props: Props) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(changeActiveContent({ id: "All Todo", type: "AllTodos" }));
  };

  return (
    <h2 className="text-white text-2xl font-bold cursor-pointer" onClick={handleClick}>All Todo's</h2>
  );
};

export { AllTodo };
