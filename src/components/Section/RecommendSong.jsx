import axios from "axios";
import React, { useState, useEffect } from "react";
import SongCard from "../common/SongCard";

const RecommendSong = () => {
  const [albumList, setAlbumList] = useState([]);

  const fetchData = async () => {
    const url = "https://www.theaudiodb.com/api/v1/json/2/album.php?i=112024";
    const response = await axios.get(url);
    setAlbumList(response.data.album);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="mt-8">
      <div className="text-[24px] font-bold mb-8">Recommended For You</div>
      <div className="flex items-center overflow-hidden justify-start">
        {albumList.slice(0, 3).map((album, index) => {
          return <SongCard key={index} album={album} />;
        })}
      </div>
    </div>
  );
};

export default RecommendSong;
