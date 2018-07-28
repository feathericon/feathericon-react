import React from 'react';

const Camera = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5zM17 5v2h2V5h-2zm-5 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
    />
  </svg>
);

export default Camera;
