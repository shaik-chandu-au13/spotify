import React from "react";
import "./styles.scss";

const LoadingView = () => {
  return (
    <div className="loading-container">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingView;
