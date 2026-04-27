import DataTableComponent from "../DataTable/DataTable";
import { useEffect, useState } from "react";
const OwnerTable = () => {
  const [data, setData] = useState([]);
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },

    {
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
    },
  ];
  useEffect(() => {
    getOwnerData();
  }, []);
  const getOwnerData = async () => {
    // Fetch owner data from API and update state
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/owners`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        },
      );
      if (!response.ok) {
        throw new Error("Failed to fetch owner data");
      }
      const data = await response.json();
      const owners = data.owners;
      setData(owners);
      // console.log("Owner data fetched successfully:", owners);
    } catch (error) {
      console.error("Error fetching owner data:", error);
    }
  };
  return (
    <DataTableComponent title="Owner List" columns={columns} data={data} />
  );
};

export default OwnerTable;
