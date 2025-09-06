import React from "react";
import { FaTrash } from "react-icons/fa";

// Accept props for each birthday
const Singlebdays = ({id, name, age, image ,remove}) => {
  return (
    <div className="flex items-center justify-between w-full max-w-md mx-auto bg-white rounded-2xl my-6">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 ms-1 rounded-full object-cover border-2 border-gray-200"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <h5 className="text-sm text-gray-500">{age} years old</h5>
        </div>
      </div>

      {/* Right Section */}
      <button onClick={()=>remove(id)} className="text-white bg-red-500 font-medium p-2 rounded-full cursor-pointer me-3 hover:underline">
        <FaTrash />
      </button>
    </div>
  );
};

export default Singlebdays;