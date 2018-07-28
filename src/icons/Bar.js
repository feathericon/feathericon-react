import React from "react";

const Bar = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M3 16h18v2H3v-2zm0-5h18v2H3v-2zm0-5h18v2H3V6z"
    />
  </svg>
);

export default Bar;
