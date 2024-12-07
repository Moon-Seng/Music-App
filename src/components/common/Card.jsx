import React from "react";
import { FiPlayCircle } from "react-icons/fi";

const Card = ({ item, index }) => {
  return (
    <div
      className="w-[48%] h-[300px] rounded-3xl cursor-pointer hover:scale-105 transition "
      style={{
        background:
          index === 1
            ? "linear-gradient(to top, rgba(64,64,235,1),  rgba(0,212,255,1))"
            : "linear-gradient(to top, rgba(102,8,110,1),  rgba(255,0,128,1))",
      }}
    >
      <div className="py-2 h-full px-4 flex flex-col justify-between items-start">
        <div className="">
          <h1
            style={{ letterSpacing: "2px" }}
            className=" mb-0 text-white text-[60px] font-bold uppercase"
          >
            {item.title}
          </h1>
          <h2 className=" -mt-3 text-gray-100 opacity-30 text-[22px]">
            {item.subTitle}
          </h2>
        </div>
        <div className="mb-2">
          <FiPlayCircle className="text-white text-[40px]" />
        </div>
      </div>
    </div>
  );
};

export default Card;
