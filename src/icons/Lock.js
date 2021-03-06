import React from 'react';

const Lock = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M7 10V7a5 5 0 1 1 10 0v3h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1zm-1 2v8h12v-8H6zm3-2h6V7a3 3 0 0 0-6 0v3zm5 4h2v4h-2v-4z"
    />
  </svg>
);

export default Lock;
