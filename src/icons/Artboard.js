import React from "react";

const Artboard = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M6 16V8H4a1 1 0 1 1 0-2h2V4a1 1 0 1 1 2 0v2h8V4a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2h-2v8h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H8v2a1 1 0 0 1-2 0v-2H4a1 1 0 0 1 0-2h2zm2 0h8V8H8v8z"
    />
  </svg>
);

export default Artboard;
