import "./datatable.css";
import DataTableModule from "react-data-table-component";

const DataTable = DataTableModule.default || DataTableModule;
const DataTableComponent = ({ columns, title, data }) => {
  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
      },
    },
    rows: {
      style: {
        backgroundColor: "var(--color-bg-secondary)",
        color: "var(--color-text)",
        paddingTop: "12px",
        paddingBottom: "12px",
      },
      highlightOnHoverStyle: {
        backgroundColor: "var(--color-bg)",
        cursor: "pointer",
        color: "var(--color-text)",
      },
    },
  };

  return (
    <DataTable
      title={title}
      columns={columns}
      data={data}
      keyField="id"
      customStyles={customStyles}
      pagination
      highlightOnHover
      pointerOnHover
      responsive
      dense
      // progressPending="Loading consumers..."
    />
  );
};

export default DataTableComponent;
