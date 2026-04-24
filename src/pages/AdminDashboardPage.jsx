import { useContext } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import DashNav from "../components/DashNav/DashNav";
import { SidebarContext } from "../Contexts/SidebarContext";
const AdminDashboardPage = () => {
  const { toggle } = useContext(SidebarContext);
  return (
    <>
      <div className="dashboardNavbarContainer">
        <DashNav />
      </div>
      <div className="sidebarContainer">
        <Sidebar toggle={toggle} />
      </div>
    </>
  );
};

export default AdminDashboardPage;
