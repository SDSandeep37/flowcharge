import { useEffect, useState } from "react";
import DataTableComponent from "../DataTable/DataTable";
import "./billing.css";
const Billing = ({ id }) => {
  const [billingData, setBillingData] = useState({});
  const [processing, setProcessing] = useState(false);
  useEffect(() => {
    getBillingData();
  }, []);

  const getBillingData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/billing/${id}`,
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
        setBillingData(result.data);
      }
    } catch (error) {
      console.error("Error fetching usage logs:", error);
    }
  };

  // const columns = [
  //   {
  //     name: "Total Request",
  //     selector: (row) => row.total_requests,
  //     sortable: true,
  //   },
  //   {
  //     name: "Amount",
  //     selector: (row) => row.bill_amount,
  //     sortable: true,
  //     wrap: true,
  //   },
  //   {
  //     name: "Billing Period",
  //     selector: (row) => row.billing_period,
  //     sortable: true,
  //   },
  //   {
  //     name: "Status",
  //     selector: (row) => row.status,
  //     sortable: true,
  //   },
  // ];
  console.log(billingData);
  const handlePayment = async (billingId) => {
    try {
      setProcessing(true);
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/payment/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ billingId }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Payment failed");
        setProcessing(false);
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (error) {
      console.error("Payment error:", error);
      alert(error.message);
      setProcessing(false);
    }
  };
  return (
    <div className="billingDetails">
      {/* <div className="billingDetailsTable">
        <DataTableComponent
          title="Billing Details"
          columns={columns}
          data={billingData ? billingData : []}
        />
      </div> */}
      <div className="billingDetailsCard">
        <h3>Billing details</h3>
        <div className="billingDetail">
          <p>
            Total request <br></br>
            <span>{billingData.total_requests}</span>
          </p>
        </div>
        <div className="billingDetail">
          <p>
            Billing Amount <br></br> <span>₹{billingData.bill_amount}</span>
          </p>
        </div>
        <div className="billingDetail">
          <p>
            Billing Period <br></br> <span>{billingData.billing_period}</span>
          </p>
        </div>
        <div className="billingDetail">
          <p>
            Status <br></br>{" "}
            <span className="billStatus">{billingData.status}</span>
          </p>
        </div>
        <div className="billingButtons">
          {billingData.status === "pending" ? (
            <button
              className="paynow"
              onClick={() => handlePayment(billingData.id)}
            >
              {processing ? "Processing" : "Pay Now"}
            </button>
          ) : (
            <button className="paid">Paid</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Billing;
