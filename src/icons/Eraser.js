import React from "react";

const Eraser = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M18 4v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zM8 4v4h8V4H8z"
    />
  </svg>
);

export default Eraser;
