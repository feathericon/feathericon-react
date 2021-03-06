import React from 'react';

const Pizza = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-5h2v2l-2-2zm10 0l-2 2v-2h2zM9 7v2H7l2-2zm6 0l2 2h-2V7zm-2.5 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
    />
  </svg>
);

export default Pizza;
