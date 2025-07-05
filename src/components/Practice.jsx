import React, { useState } from "react";
import PracticeBtn from "./PracticeBtn";
import Data from "../data/Data.json";
const Practice = () => {
  const [bgColor, setBgColor] = useState("#12CD34");
  const handleClick = (color) => {
    setBgColor(color);
  };
  return (
    <div style={{ backgroundColor: bgColor, height: "100vh" }}>
      {Data.map((color, index) => {
        return (
          <PracticeBtn
            key={index}
            color={color}
            text={`${color} Button`}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default Practice;
