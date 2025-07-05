import React from "react";

const PracticeBtn = ({ color, text, handleClick }) => {
  return (
    <>
      <button
        style={{
          backgroundColor: color,
          padding: "5px 15px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => handleClick(color)}
      >
        {text}
      </button>
    </>
  );
};

export default PracticeBtn;
