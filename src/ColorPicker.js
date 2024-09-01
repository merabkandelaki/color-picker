import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#000000");
  const handleChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <div className="text-center mt-5">
      <input
        className="w-24 h-24"
        type="color"
        value={color}
        onChange={handleChange}
      />
      <div className="mt-2 text-lg">
        <span
          className="inline-block w-10 h-5 mr-2"
          style={{ backgroundColor: color }}
        ></span>{" "}
        {color}
      </div>
    </div>
  );
};

export default ColorPicker;
