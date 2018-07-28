import React from "react";

const Mask = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm14 16c0-7.732-6.268-14-14-14v14h14z"
    />
  </svg>
);

export default Mask;
