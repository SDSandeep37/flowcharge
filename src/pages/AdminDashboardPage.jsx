import { useContext } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import DashNav from "../components/DashNav/DashNav";
import { SidebarContext } from "../Contexts/SidebarContext";
import Card from "../components/Card/Card";
import ConsumerTable from "../components/ConsumerTable/ConsumerTable";
import OwnerTable from "../components/OwnerTable/OwnerTable";
const AdminDashboardPage = () => {
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
          <h1 className="dashboardHeading">Dashboard</h1>
          <div className="cardContainer">
            <Card
              title="APIs"
              description="Manage API endpoints and access."
              buttonText="View APIs"
            />
            <Card
              title="Users"
              description="Manage user accounts and permissions."
              buttonText="View Users"
            />
            <Card
              title="Owners"
              description="Manage API owners and their details."
              buttonText="View Owners"
            />
            <Card
              title="Billings"
              description="Manage billing information."
              buttonText="View Billing"
            />
          </div>
          <div className="dashBoardTableContainer">
            <ConsumerTable />
          </div>
          <div className="dashBoardTableContainer">
            <OwnerTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
