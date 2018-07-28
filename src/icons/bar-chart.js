import React from "react";

const BarChart = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M5 19h15a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v7zm5-4a1 1 0 0 1-2 0V6a1 1 0 1 1 2 0v9zm2 0V8a1 1 0 0 1 2 0v7a1 1 0 0 1-2 0zm4-11a1 1 0 0 1 2 0v11a1 1 0 0 1-2 0V4z"
    />
  </svg>
);

export default BarChart;
