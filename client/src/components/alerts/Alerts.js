import React from "react";

const Alerts = ({ children, variant }) => {
  return (
    <div className={`alert-${variant}`}>{children}</div>
  );
};

export default Alerts;
