import React from "react";
import loadingSpinner from "./loadingSpinner.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img style={{ margin: "2rem" }} src={loadingSpinner} alt="loading" />
    </div>
  );
};

export default Spinner;
