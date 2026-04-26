import Card from "../components/Card/Card";
import ConsumerTable from "../components/ConsumerTable/ConsumerTable";
import OwnerTable from "../components/OwnerTable/OwnerTable";
const AdminDashboardPage = () => {
  return (
    <>
      <h1 className="dashboardHeading">Dashboard</h1>
      <div className="cardContainer">
        <Card
          title="APIs"
          description="Manage API endpoints and access."
          buttonText="View APIs"
          path="/admin/apis"
        />
        <Card
          title="Users"
          description="Manage user accounts and permissions."
          buttonText="View Users"
          path="/admin/users"
        />
        <Card
          title="Owners"
          description="Manage API owners and their details."
          buttonText="View Owners"
          path="/admin/owners"
        />
        <Card
          title="Billings"
          description="Manage billing information."
          buttonText="View Billing"
          path="/admin/billings"
        />
      </div>
      <div className="dashBoardTableContainer">
        <ConsumerTable />
      </div>
      <div className="dashBoardTableContainer">
        <OwnerTable />
      </div>
    </>
  );
};

export default AdminDashboardPage;
