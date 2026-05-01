import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataTableComponent from "../../../components/DataTable/DataTable";
import "./consumerApiDetail.css";
import Billing from "../../../components/Billing/Billing";
const ConsumerApiDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    getusageLogData();
  }, [id]);

  const getusageLogData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/logs/${id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        },
      );

      if (!response.ok) {
        throw new Error("Failed to get usages log details");
      }

      const result = await response.json();

      if (result.success) {
        setData(result.data);
        // console.log(result.billingDetails);
      }
    } catch (error) {
      console.error("Error fetching usage logs:", error);
    }
  };

  const columns = [
    {
      name: "Api Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Api Key Status",
      selector: (row) => row.status_of_key,
      sortable: true,
      wrap: true,
    },
    {
      name: "Response Status",
      selector: (row) => row.response_status,
      sortable: true,
    },
    {
      name: "Latency time(ms)",
      selector: (row) => row.latency_ms,
      sortable: true,
    },
  ];
  return (
    <div className="consumerApiDetails">
      <div className="consumerApiStat">
        <DataTableComponent
          title="API usages log"
          columns={columns}
          data={data}
        />
      </div>
      <div className="consumerApiBillings">
        <Billing id={id} />
      </div>
    </div>
  );
};

export default ConsumerApiDetail;
