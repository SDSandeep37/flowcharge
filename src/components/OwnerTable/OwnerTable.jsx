import DataTableModule from "react-data-table-component";
import DataTableComponent from "../DataTable/DataTable";

const DataTable = DataTableModule.default || DataTableModule;
const OwnerTable = () => {
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
          <button className="tableViewButton">View</button>
          <button className="tableEditButton">Edit</button>
          <button className="tableDeleteButton">Delete</button>
        </div>
      ),
    },
  ];
  const data = [
    { id: 1, name: "Jon Snow", email: "jon@snow.com" },
    { id: 2, name: "Arya q", email: "arya@stark.com" },
  ];
  return (
    <DataTableComponent title="Owner List" columns={columns} data={data} />
  );
};

export default OwnerTable;
