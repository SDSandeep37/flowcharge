import React from "react";
import Card from "../components/Card/Card";
import ApiTable from "../components/ApiTable/ApiTable";

const ConsumerDashboardPage = () => {
  return (
    <>
      <h1 className="dashboardHeading">Dashboard</h1>
      <div className="cardContainer">
        <Card
          title="APIs"
          description="Manage API endpoints and access."
          buttonText="View APIs"
          path="/consumer/apis"
        />

        <Card
          title="Billings"
          description="Manage billing information."
          buttonText="View Billing"
          path="/consumer/billings"
        />
      </div>
      <div className="dashBoardTableContainer">
        <ApiTable />
      </div>
    </>
  );
};

export default ConsumerDashboardPage;
