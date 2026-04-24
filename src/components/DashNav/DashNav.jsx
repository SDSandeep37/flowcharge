import { useContext, useState } from "react";
import "./dashnav.css";
import { RiMenuUnfoldFill } from "react-icons/ri";
import Sidebar from "../Sidebar/Sidebar";
import { SidebarContext } from "../../Contexts/SidebarContext";
const DashNav = () => {
  const { toggle, setToggle } = useContext(SidebarContext);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="dashNav">
      <div className="brandAndToggle">
        <h1 className="brand">Flow Charge</h1>
        <div className="sidebarToggleContainer">
          <button className="sidebarToggle" onClick={handleToggle}>
            <RiMenuUnfoldFill size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashNav;
