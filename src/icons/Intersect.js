import React from 'react';

const Intersect = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M15 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h4V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4zm-5-1h4v-4h-4v4z"
    />
  </svg>
);

export default Intersect;
