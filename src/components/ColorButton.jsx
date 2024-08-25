import React from "react";

const ColorButton = ({ color, handleBgChange }) => {
  return (
    <div>
      <button
        className="button"
        style={{ backgroundColor: color }}
        onClick={() => handleBgChange(color)}
      ></button>
    </div>
  );
};

export default ColorButton;
