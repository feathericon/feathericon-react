import React from 'react';

const Cage = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M14 4.341c2.33.824 4 3.047 4 5.659v9h.5a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 0 1 0-3H6v-9a6.002 6.002 0 0 1 4-5.659V4a2 2 0 1 1 4 0v.341zM16 11v3h-3v-3h3zm0-2h-3V6a4.183 4.183 0 0 1 3 3zm-8 2h3v3H8v-3zm0-2a4.183 4.183 0 0 1 3-3v3H8zm8 7v3h-3v-3h3zm-8 0h3v3H8v-3z"
    />
  </svg>
);

export default Cage;
