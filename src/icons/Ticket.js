import React from "react";

const Ticket = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M2 10V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 1 0 0 4v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a2 2 0 1 0 0-4zm3-2v8h14V8H5zm2 2h10v4H7v-4z"
    />
  </svg>
);

export default Ticket;
