import React, { useEffect } from "react";

const Success = () => {
  useEffect(() => {
    console.log("Payment successful");
  }, []);

  return (
    <div>
      <h2>✅ Payment Successful</h2>
      <p>Your payment has been processed.</p>
    </div>
  );
};

export default Success;
