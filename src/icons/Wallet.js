import React from 'react';

const Wallet = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M20 9c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3zm-2 0V6H4v12h14v-3h-2c-1.1 0-2-1.1-2-2v-1.968C14 9.9 14.9 9 16 9h2zm-2 4h2v-2h-2v2z"
    />
  </svg>
);

export default Wallet;
