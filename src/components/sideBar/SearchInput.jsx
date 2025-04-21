import React from "react";
import { FaSearch } from "react-icons/fa";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SearchInput = () => {
  return (
    <div>
      <div className="flex w-full max-w-sm items-center space-x-2 m-2">
        <Input type="text" placeholder="Search user" />
        <Button
          type="submit"
          className="rounded-full hover:cursor-pointer bg-blue-500"
        >
          <FaSearch />
        </Button>
      </div>
    </div>
  );
};

export default SearchInput;
