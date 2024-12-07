import React, { useState } from "react";
import Profile from "../common/Profile";
import ColorBox from "../common/ColorBox";

// Icon
import {
  FiHome,
  FiBarChart,
  FiUser,
  FiList,
  FiMusic,
  FiPlayCircle,
} from "react-icons/fi";

const BrowseList = [
  { title: "Home", icon: <FiHome /> },
  { title: "Songs", icon: <FiMusic /> },
  { title: "Playlists", icon: <FiList /> },
  { title: "Just for You", icon: <FiUser /> },
  { title: "Top Charts", icon: <FiBarChart /> },
];

const playList = [
  "Workout Mix",
  "Chilling at Home",
  "Booping at Adobe",
  "XD 4 Life",
];

const Sidebar = () => {
  return (
    <div className="px-8">
      <div className="mt-4">
        <ColorBox />
      </div>
      <div className="mt-12">
        <Profile />
      </div>
      <div className="mt-12">
        <div className="mb-8">
          <p className="uppercase font-bold text-gray-500">Browse</p>
        </div>
        <div className="">
          {BrowseList.map((item, index) => {
            return (
              <div
                key={item.title + index}
                className="flex cursor-pointer mb-4 items-center justify-start"
              >
                {item.icon}
                <p
                  className="ml-2 text-lg text-gray-600 "
                  style={{
                    fontWeight: item.title === "Home" ? "bolder" : "bold",
                  }}
                >
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-12">
        <div className="mb-8">
          <p className="uppercase font-bold text-gray-500">Your Playlists</p>
        </div>
        <div className="">
          {playList.map((item, index) => {
            return (
              <div
                key={item + index}
                className="flex cursor-pointer mb-4 items-center justify-start"
              >
                <FiPlayCircle />
                <p
                  className="ml-2 text-lg text-gray-600 "
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
