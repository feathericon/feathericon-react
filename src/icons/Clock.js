import React from 'react';

const Clock = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm8-10a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-4-1a1 1 0 0 1 0 2h-3c-1.1 0-2-.9-2-2V7a1 1 0 0 1 2 0v4h3z"
    />
  </svg>
);

export default Clock;
