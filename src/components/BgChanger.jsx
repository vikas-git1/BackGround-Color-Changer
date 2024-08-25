import React, { useState } from "react";
import Data from "../data/Data.json";
import "./BgChanger.css";
import ColorButton from "./ColorButton";

const BgChanger = () => {
  const [updateBgColor, setUpdateBgColor] = useState("grey");
  const handleBgChange = (color) => {
    setUpdateBgColor(color);
  };

  return (
    <>
      <div className="btn_container" style={{ backgroundColor: updateBgColor }}>
        <h1>Color Code: {updateBgColor}</h1>

        {Data.map((color, index) => (
          <ColorButton
            key={index}
            color={color}
            handleBgChange={handleBgChange}
          />
        ))}
      </div>
    </>
  );
};

export default BgChanger;

// <button
//   className="button"
//   key={index}
//   style={{ backgroundColor: color }}
//   onClick={() => handleBgChange(color)}
// ></button>
