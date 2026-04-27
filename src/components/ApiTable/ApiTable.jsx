import { useEffect, useState } from "react";
import DataTableComponent from "../DataTable/DataTable";

const ApiTable = ({ userType }) => {
  const [data, setData] = useState([]);
  const baseColumns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Base URL",
      selector: (row) => row.base_url,
      sortable: true,
    },
    {
      name: "Owner",
      selector: (row) => row.owner_name,
      sortable: true,
    },
  ];
  const actionsColumn = {
    name: "Actions",
    cell: (row) => (
      <div className="tableActions">
        <button
          className="tableViewButton"
          onClick={() => alert("This function is not available for now")}
        >
          View
        </button>
        <button
          className="tableEditButton"
          onClick={() => alert("This function is not available for now")}
        >
          Edit
        </button>
        <button
          className="tableDeleteButton"
          onClick={() => alert("This function is not available for now")}
        >
          Delete
        </button>
      </div>
    ),
  };
  const columns =
    userType === "consumer" ? baseColumns : [...baseColumns, actionsColumn];
  useEffect(() => {
    getApisData();
  }, []);
  const getApisData = async () => {
    // Fetch apis data from API
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/apis`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch API data");
      }
      const data = await response.json();
      if (data.success) {
        const apis = data.apis;
        setData(apis);
      }
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };
  return <DataTableComponent title="API List" columns={columns} data={data} />;
};

export default ApiTable;
