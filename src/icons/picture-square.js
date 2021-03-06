import React from 'react';

const PictureSquare = props => (
  <svg width={24} height={24} {...props}>
    <path d="M5 5v14h14V5H5zm0-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm3.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM7 14l2-2 2 2 3-3 3 3v3H7v-3z" />
  </svg>
);

export default PictureSquare;
