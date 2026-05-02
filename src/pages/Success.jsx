import React, { useEffect } from "react";

const Success = () => {
  useEffect(() => {
    console.log("Payment successful");
  }, []);
  setTimeout(() => {
    window.location.href = "/dashboard";
  }, 4000);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2>✅ Payment Successful</h2>
      <p>Your payment has been processed.</p>
      <p>Please wait redirecting...</p>
    </div>
  );
};

export default Success;
