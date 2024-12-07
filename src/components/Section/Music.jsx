import React from "react";
import RecentPlayed from "./RecentPlayed";
import RecommendSong from "./RecommendSong";

const Music = () => {
  return (
    <div className="flex items-start justify-between">
      <div className="w-[48%]">
        <RecentPlayed />
      </div>
      <div className="w-[48%]">
        <RecommendSong />
      </div>
    </div>
  );
};

export default Music;
