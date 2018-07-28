import React from "react";

const Calendar = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M8 4h8V2h2v2h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V2h2v2zM5 8v12h14V8H5zm2 3h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm0 4h2v2h-2v-2zm-4 0h2v2h-2v-2zm-4 0h2v2H7v-2z"
    />
  </svg>
);

export default Calendar;
