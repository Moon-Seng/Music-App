import React from "react";
import SearchBar from "../common/SearchBar";
import NotiBell from "../common/NotiBell";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between">
      <SearchBar />
      <NotiBell />
    </div>
  );
};

export default TopBar;
