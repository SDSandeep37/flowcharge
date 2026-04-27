import Card from "../components/Card/Card";
import ConsumerTable from "../components/ConsumerTable/ConsumerTable";
import OwnerTable from "../components/OwnerTable/OwnerTable";

const OwnerDashboardPage = () => {
  return (
    <>
      <h1 className="dashboardHeading">Dashboard</h1>
      <div className="cardContainer">
        <Card
          title="APIs"
          description="Manage API endpoints and access."
          buttonText="View APIs"
          path="/owner/apis"
        />
        <Card
          title="Users"
          description="View user accounts and details."
          buttonText="View Users"
          path="/owner/users"
        />

        <Card
          title="Billings"
          description="Manage billing information."
          buttonText="View Billing"
          path="/owner/billings"
        />
      </div>
      <div className="dashBoardTableContainer">
        {/* here we have to show only those consumers that belong to this owner and their APIs */}
        <ConsumerTable />
      </div>
    </>
  );
};

export default OwnerDashboardPage;
