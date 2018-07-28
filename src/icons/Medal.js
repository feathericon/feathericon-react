import React from 'react';

const Medal = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M12 22a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM9 2h2v4c-1.1 0-2-.9-2-2V2zm4 0h2v2c0 1.1-.9 2-2 2V2z"
    />
  </svg>
);

export default Medal;
