import axios from "axios";
import React, { useState, useEffect } from "react";
import { FiHeart, FiMoreHorizontal } from "react-icons/fi";

const SongList = () => {
  const [songList, setSongList] = useState([]);

  const fetchData = async () => {
    const url = "https://www.theaudiodb.com/api/v1/json/2/track.php?m=2115888";
    const response = await axios.get(url);
    setSongList(response.data.track);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const formattedMinute = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedMinute}:${formattedSeconds}`;
  }

  return (
    <div className="">
      {songList.length > 0 &&
        songList.slice(0, 4).map((song, index) => {
          return (
            <div
              key={index}
              className=" cursor-pointer mb-4 flex w-full items-center justify-between p-4"
            >
              <div className="flex items-center ">
                <div className="mr-3">
                  <div className="w-[30px] h-[30px] rounded-sm  bg-gray-500"></div>
                </div>
                <div className="font-semibold w-[100px] text-sm text-gray-500">
                  {song.strTrack}
                </div>
              </div>
              <div className="">
                <p className="font-semibold text-sm text-gray-500">
                  {song.strArtist}
                </p>
              </div>
              <div className="">
                <p className="font-semibold text-sm text-gray-500">
                  {formatTime(song.intDuration)}
                </p>
              </div>
              <div className="">
                <p className="">
                  <FiHeart />
                </p>
              </div>
              <div className="">
                <FiMoreHorizontal />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SongList;
