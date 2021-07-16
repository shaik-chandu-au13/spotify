import React from "react";
import "./styles.scss";

const InputRange = ({ id = "", step = "0.1", value, onChange }) => {
  return (
    <div className="input-range-container">
      <input
        id={id}
        step={step}
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={onChange}
      />
      <div className="progress-bar back"></div>
      <div
        className="progress-bar front"
        style={{
          width: value + "%",
        }}
      ></div>
    </div>
  );
};

export default InputRange;
