import React from "react";

const Crop = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M16 20v-2H8c-1.1 0-2-.9-2-2V8H4a1 1 0 1 1 0-2h2V4a1 1 0 1 1 2 0v2h9l2-2 1 1-2 2v9h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0zm0-4V9l-7 7h7zM8 8v7l7-7H8z"
    />
  </svg>
);

export default Crop;
