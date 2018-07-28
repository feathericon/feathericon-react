import React from "react";

const Flag = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M6 12v9a1 1 0 0 1-2 0V4c0-1.1.9-2 2-2h6c1.1 0 1.999.9 1.999 2H18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5a2 2 0 0 1-1.997-2H6zm0-8v6h7v2h5.002V6H12V4H6z"
    />
  </svg>
);

export default Flag;
