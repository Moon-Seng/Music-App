import React, { useState } from "react";
import ProfileImage from "../../assets/images/profile.png";
import { FiChevronDown } from "react-icons/fi";

import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { FiLogOut } from "react-icons/fi";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 32,
  height: 16,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[600],
      }),
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 12,
    height: 12,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));

const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex relative items-center justify-start ml-4">
      <div className="flex items-center justify-start">
        <div className="mr-4 w-[40px] h-[40px] rounded-full overflow-hidden ">
          <img src={ProfileImage} alt="Profile Image" />
        </div>
        <div className="">
          <div
            onClick={() => {
              setOpen(true);
            }}
            className="flex cursor-pointer items-center justify-start"
          >
            <p className="mr-2 font-bold">Joshua</p>
            <FiChevronDown />
          </div>
          <div className="border-[1px] border-gray-400 w-fit p-[2px]">
            <p className="text-gray-400 text-[8px]">PREMIUM</p>
          </div>
        </div>
      </div>

      {open && (
        <div
          onClick={() => {
            setOpen(false);
          }}
          className="absolute cursor-pointer bg-white top-5 left-8"
        >
          <div className="p-2 w-[180px]">
            <div className="flex items-center justify-between">
              <div className="border-[1px] rounded-sm border-pink-400 w-fit p-[2px]">
                <p className="text-pink-400 text-[8px] font-bold">PREMIUM</p>
              </div>
              <div className="">
                <p className="text-[10px] text-gray-400">Throught 11/2</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-bold text-[12px]">Private</p>
              <div className="">
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked={false} />}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-bold text-[12px]">Explicit Filter</p>
              <div className="">
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked={false} />}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-bold text-[12px]">Friend Activity</p>
              <div className="">
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked={false} />}
                />
              </div>
            </div>
            <div className="flex items-center justify-between my-2">
              <p className="font-bold text-[12px]">Account Settings</p>
            </div>
            <div className="flex items-center justify-end">
              <p className="text-[12px] mr-2 text-gray-400">Logout</p>
              <FiLogOut className="text-gray-400" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
