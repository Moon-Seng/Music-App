import { TextField } from "@mui/material";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className=" cursor-pointer"
      >
        {open ? (
          <FiSearch fontSize={24} />
        ) : (
          <div className="">
            <TextField
              sx={{ width: "500px" }}
              size="small"
              placeholder="Search for songs, artists, albums"
              variant="outlined"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
