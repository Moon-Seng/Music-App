import React from "react";

const SongCard = ({ album }) => {
  return (
    <div className="mr-4 cursor-pointer">
      <div className="rounded-2xl w-[200px] h-[200px] overflow-hidden">
        <img src={album.strAlbumThumb} alt="" />
      </div>
      <div className="">
        <p className="font-bold mb-0 text-lg">{album.strAlbum}</p>
        <p className="text-gray-400 text-sm">{album.strArtist}</p>
      </div>
    </div>
  );
};

export default SongCard;
