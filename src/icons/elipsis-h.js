import React from 'react';

const ElipsisH = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M18 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM6 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
    />
  </svg>
);

export default ElipsisH;
