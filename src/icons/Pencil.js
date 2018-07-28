import React from "react";

const Pencil = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M3 18L15 6l3 3L6 21H3v-3zM16 5l2-2 3 3-2.001 2.001L16 5z"
    />
  </svg>
);

export default Pencil;
