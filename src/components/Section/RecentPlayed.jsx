import React from "react";
import SongList from "../common/SongList";

const RecentPlayed = () => {
  return (
    <div className="mt-8">
      <div className="mb-8 text-[24px] font-bold">Recently Played</div>
      <SongList />
    </div>
  );
};

export default RecentPlayed;
