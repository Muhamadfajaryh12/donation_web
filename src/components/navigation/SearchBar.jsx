import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const searchRef = useRef();
  const navigate = useNavigate();
  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    navigate(`/campaign/search?q=${keyword}`);
  };
  return (
    <form onSubmit={handleSearch} className="max-w-xl w-full">
      <div className="flex gap-2 items-center  border p-2 rounded-lg border-gray-200">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          className="focus:outline-none w-full"
          placeholder="Pencarian"
          ref={searchRef}
        />
      </div>
    </form>
  );
};

export default SearchBar;
