import DataTableComponent from "../DataTable/DataTable";

const ConsumerTable = () => {
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
    { id: 2, name: "Arya Stark", email: "arya@stark.com" },
  ];
  return (
    <DataTableComponent title="Consumer List" columns={columns} data={data} />
  );
};

export default ConsumerTable;
