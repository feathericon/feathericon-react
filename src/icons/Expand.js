import React from 'react';

const Expand = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M14 4h6v6l-2-2-4 4-2-2 4-4-2-2zm-4 16H4v-6l2 2 4-4 2 2-4 4 2 2z"
    />
  </svg>
);

export default Expand;
