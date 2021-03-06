import React from 'react';

const Gamepad = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M13 15h-2a5 5 0 1 1-4-8h10a5 5 0 1 1-4 8zm-5-4v-1a1 1 0 1 0-2 0v1H5a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2H8zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
    />
  </svg>
);

export default Gamepad;
