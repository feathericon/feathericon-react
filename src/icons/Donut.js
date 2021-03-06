import React from 'react';

const Donut = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 6C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-18h2v2h-2V4zm6 5h2v2h-2V9zM5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-4 2h2v2h-2v-2zm-4 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-5-4h2v2H6v-2zM5 8h2v2H5V8z"
    />
  </svg>
);

export default Donut;
