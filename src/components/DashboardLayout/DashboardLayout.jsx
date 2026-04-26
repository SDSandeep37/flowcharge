import { useContext } from "react";
import Sidebar from "../Sidebar/Sidebar";
import DashNav from "../DashNav/DashNav";
import { SidebarContext } from "../../Contexts/SidebarContext";

import { Outlet } from "react-router-dom";
const DashboardLayout = () => {
  const { toggle } = useContext(SidebarContext);
  return (
    <>
      <div
        className="dashboardNavbarContainer"
        style={{ position: "relative" }}
      >
        <DashNav />
      </div>
      <div className="sidebarAndContentContaier">
        <div
          className="sidebarContainer"
          style={{
            display: "flex",
            marginTop: "60px",
          }}
        >
          <Sidebar toggle={toggle} />
        </div>
        <div
          className="dashboardContent"
          style={{
            marginLeft: toggle ? "10px" : "20px",
            transition: "margin-left 0.7s",
            marginTop: "20px",
            minWidth: "0",
            flex: "1",
          }}
        >
          {/* here all the content will be rendered */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
