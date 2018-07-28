import React from 'react';

const Gift = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M19 12v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.17A3 3 0 1 1 12 5a3 3 0 1 1 5.83 1H19a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2zm-8-4H5v2h6V8zm2 0v2h6V8h-6zm-6 4v8h10v-8H7zm2-6h1V5a1 1 0 1 0-1 1zm6 0a1 1 0 1 0-1-1v1h1z"
    />
  </svg>
);

export default Gift;
