import React from "react";

const Beer = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M17 16v3c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2zM5 5v3h10V5H5zm0 5v9h10v-9H5zm4 6a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0v3zm4 0a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0v3zm4-7h2v5h-2V9z"
    />
  </svg>
);

export default Beer;
