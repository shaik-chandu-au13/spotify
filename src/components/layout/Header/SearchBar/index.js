import React, { useState } from "react";
import "./styles.scss";

import { ReactComponent as SearchIcon } from "@/assets/icons/search.svg";
import { ReactComponent as ClearIcon } from "@/assets/icons/clear.svg";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="searchbar-container">
      <SearchIcon className="search-icon" />

      <input
        type="text"
        className="search-input"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search for Artists, Songs or Podcasts"
      />

      {searchValue !== "" ? (
        <ClearIcon className="search-clear-icon" onClick={() => setSearchValue("")} />
      ) : null}
    </div>
  );
};

export default SearchBar;
