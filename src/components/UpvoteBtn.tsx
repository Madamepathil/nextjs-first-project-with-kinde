"use client";
import React from "react";

const UpvoteBtn = () => {
  const [upvoteCount, setUpvoteCount] = React.useState(0);
  return (
    <button
      className="bg-blue-500 p-3 text-white"
      onClick={() => {
        setUpvoteCount(upvoteCount + 1);
      }}
    >
      Upvote
    </button>
  );
};

export default UpvoteBtn;
