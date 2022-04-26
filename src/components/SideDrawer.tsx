import React from "react";
import "./SideDrawer.css";

interface Props {
  children: React.ReactNode;
  show: boolean;
  className?: string;
}

const SideDrawer = ({ show, children, className }: Props) => {
  return (
    <div
      className={`${show ? "side-drawer open" : "side-drawer"} ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
};

export { SideDrawer };
