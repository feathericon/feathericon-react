import React from 'react';

const Heart = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M12 20c-2.205-.48-9-4.24-9-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.76-6.795 10.52-9 11z"
    />
  </svg>
);

export default Heart;
