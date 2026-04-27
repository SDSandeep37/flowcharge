import { useContext } from "react";
import Sidebar from "../Sidebar/Sidebar";
import DashNav from "../DashNav/DashNav";
import { SidebarContext } from "../../Contexts/SidebarContext";

import { Outlet } from "react-router-dom";
import { UserAuthContext } from "../../Contexts/AuthContext";
const DashboardLayout = () => {
  const { toggle } = useContext(SidebarContext);
  const { user, loading } = useContext(UserAuthContext);
  const role = user?.role;
  if (!loading && !user) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <p style={{ color: "red", letterSpacing: "1.3px" }}>
          Session expired or Unauthorized access
          {setTimeout(() => {
            window.location.href = "/login";
          }, 2000)}
        </p>
      </div>
    );
  }
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <p style={{ color: "green", letterSpacing: "1.3px" }}>
          Please wait while loading...
        </p>
      </div>
    );
  }

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
