import React from "react";
import "./DrawerToggle.css";

interface Props {
  click: () => void;
}

const DrawerToggle = (props: Props) => {
  return (
    <button className="toggle-button" onClick={props.click}>
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
    </button>
  );
};

export { DrawerToggle };
