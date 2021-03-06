import React from 'react';

const Pot = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M20 11v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2h-1zM6 11v7h12v-7H6zm5-5V5a1 1 0 0 1 2 0v1h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h6z"
    />
  </svg>
);

export default Pot;
