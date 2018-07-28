import React from 'react';

const Truck = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M10 18a3 3 0 0 1-6 0 2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11.001C16.105 4 17 4.895 17 5.999L20 6c2 0 2 2.896 2 4v6a2 2 0 0 1-2 2h-1a3 3 0 0 1-6 0h-3zM4 6v9h11V6H4zm13 2v4h3V8h-3zm-1 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
    />
  </svg>
);

export default Truck;
