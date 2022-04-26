import React, { useState } from "react";
import { BiTask } from "react-icons/bi";
import { Sidebar } from "./Sidebar";
import { DrawerToggle } from "./DrawerToggle";
import { SideDrawer } from "./SideDrawer";

type Props = {
  className: string;
};

const Header = ({ className }: Props) => {
  const [show, setShow] = useState(false);

  const drawerToggleClickHandler = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <>
      <header
        className={`bg-customBlack p-4 flex justify-between items-center ${className}`}
      >
        <div className="flex items-center gap-2">
          <p className="text-white text-3xl font-bold">Todo List</p>
          <BiTask className="text-white text-3xl" />
        </div>
        <div className="flex items-center md:hidden">
          <DrawerToggle click={drawerToggleClickHandler} />
        </div>
      </header>
      <SideDrawer className="md:hidden" show={show}>
        <Sidebar className="h-full" />
      </SideDrawer>
    </>
  );
};

export { Header };
