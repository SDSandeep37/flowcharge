import React from "react";

const Cancel = () => {
  setTimeout(() => {
    window.location.href = "/dashboard";
  }, 3000);
  return (
    <div>
      <h2>❌ Payment Cancelled</h2>
      <p>You can try again.</p>
    </div>
  );
};

export default Cancel;
