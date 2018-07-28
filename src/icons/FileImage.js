import React from "react";

const FileImage = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M6 2h10l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm9.172 2H6v16h12V6.828h-2.828V4zM15 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-7 2l3.07-3L14 16l1-1 1 1v2H8v-2z"
    />
  </svg>
);

export default FileImage;
