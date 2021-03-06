import React from 'react';

const Timeline = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M9.17 17a3.001 3.001 0 0 1 5.66 0H20l1 1-1 1h-5.17a3.001 3.001 0 0 1-5.66 0H3l1-1-1-1h6.17zM12 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2-7l-2 2-2-2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-3zM7 5v5h4l1 1 1-1h4V5H7z"
    />
  </svg>
);

export default Timeline;
