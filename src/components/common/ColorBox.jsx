import React from "react";

const ColorBox = () => {
  return (
    <div>
      <div className="flex items-center justify-start">
        <div className="w-[14px] h-[14px] rounded-full bg-red-500 mr-3"></div>
        <div className="w-[14px] h-[14px] rounded-full bg-yellow-500 mr-3"></div>
        <div className="w-[14px] h-[14px] rounded-full bg-green-500 mr-3"></div>
      </div>
    </div>
  );
};

export default ColorBox;
