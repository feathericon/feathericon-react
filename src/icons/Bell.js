import React from "react";

const Bell = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M15 18v1a3 3 0 0 1-6 0v-1H5c-.55 0-1-.45-1-1s.45-1 1-1h1v-6a6.002 6.002 0 0 1 5-5.917V3a1 1 0 0 1 2 0v1.083c2.838.476 5 2.944 5 5.917v6h1c.55 0 1 .45 1 1s-.45 1-1 1h-4zm-7-2h8v-6a4 4 0 1 0-8 0v6zm4 4a1 1 0 0 0 1-1v-1h-2v1a1 1 0 0 0 1 1z"
    />
  </svg>
);

export default Bell;
