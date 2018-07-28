import React from "react";

const Picture = props => (
  <svg width={24} height={24} {...props}>
    <path d="M4 6v12h16V6H4zm0-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm3.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM7 14l2-2 2 2 4-4 3 3v3H7v-2z" />
  </svg>
);

export default Picture;
