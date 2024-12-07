import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import { FiBell } from "react-icons/fi";
import ManOne from "../../assets/images/man1.jpg";
import ManTwo from "../../assets/images/man2.jpg";
import WomanOne from "../../assets/images/woman1.jpg";

const NotiBell = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <Badge
        onClick={() => {
          setOpen(true);
        }}
        badgeContent={3}
        color="error"
        className=" cursor-pointer"
      >
        <FiBell fontSize={24} />
      </Badge>

      {open && (
        <div
          onClick={() => {
            setOpen(false);
          }}
          className="absolute cursor-pointer shadow-sm shadow-gray-400 rounded-md bg-white top-12 right-0"
        >
          <div className="p-4 w-[300px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <div className="w-[30px] h-[30px] rounded-full overflow-hidden mr-3">
                  <img src={ManOne} alt="Man" />
                </div>
                <div className="">
                  <p className=" text-[10px]">Marcus likes your playlist</p>
                  <p className="font-bold text-[10px]">XD 4 Life.</p>
                </div>
              </div>
              <div className="">
                <p className="text-[8px] text-gray-400">2m</p>
              </div>
            </div>

            <div className="flex items-center justify-between my-4">
              <div className="flex items-center justify-start">
                <div className="w-[30px] h-[30px] rounded-full overflow-hidden mr-3">
                  <img src={ManTwo} alt="Man" />
                </div>
                <div className="">
                  <p className=" text-[10px]">Mario is currently listen to</p>
                  <p className="font-bold text-[10px]">Best of Blues.</p>
                </div>
              </div>
              <div className="">
                <p className="text-[8px] text-gray-400">2m</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <div className="w-[30px] h-[30px] rounded-full overflow-hidden mr-3">
                  <img src={WomanOne} alt="Woman" />
                </div>
                <div className="">
                  <p className=" text-[10px]">Mania likes your playlist</p>
                  <p className="font-bold text-[10px]">Booping at Adobe.</p>
                </div>
              </div>
              <div className="">
                <p className="text-[8px] text-gray-400">2m</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotiBell;
