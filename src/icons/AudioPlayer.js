import React from "react";

const AudioPlayer = props => (
  <svg width={24} height={24} {...props}>
    <path
      fillRule="evenodd"
      d="M18 20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16zm-6 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 4v6h8V4H8zm4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
    />
  </svg>
);

export default AudioPlayer;
