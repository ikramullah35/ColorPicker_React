import React, { useState } from "react";

const Color = () => {
  const [color, setColor] = useState("#ffffff"); // default color

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">React Color Picker</h1>

      {/* Color Preview Box */}
      <div
        className="w-40 h-40 rounded-xl shadow-lg mb-4 border border-gray-300"
        style={{ backgroundColor: color }}
      ></div>

      {/* Selected Color Label */}
      <label className="mb-4 text-lg font-semibold text-gray-700">
        Selected Color: <span className="font-mono">{color}</span>
      </label>

      {/* Select Color Label */}
      <label className="mb-4 text-lg font-semibold text-gray-700">
       select color<span className="font-mono"></span>
      </label>
      {/* Color Input */}
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        
      />
    </div>
  );
};

export default Color;
