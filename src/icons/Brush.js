import React from 'react';

const Brush = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M5.261 16.011A2 2 0 0 0 7.99 18.74 2.5 2.5 0 0 1 5.5 21H3v-2.5a2.5 2.5 0 0 1 2.261-2.489zM19 3c1.1 0 2 1.006 2 2L8 18l-2-2L19 3z"
    />
  </svg>
);

export default Brush;
