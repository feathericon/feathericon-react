import React from "react";

const PieChart = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18a8 8 0 1 0 8 8h-8V4z"
    />
  </svg>
);

export default PieChart;
