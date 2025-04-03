import React from "react";
import { SearchBar } from "../ui/search-bar";

const SearchBarComponent = () => {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <div className="flex flex-grow items-center gap-6 mr-6 md:hidden sm:hidden">
      <div className="w-full flex-1">
        <SearchBar
          onSearch={handleSearch}
          placeholders={[
            "Tell us what you're looking to learn",
            "Search for universities",
            "Find test prep courses",
            "Explore study abroad options",
          ]}
        />
      </div>
    </div>
  );
};

export default SearchBarComponent;
