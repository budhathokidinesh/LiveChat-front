import React from "react";

import { Button } from "../ui/button";

import { Separator } from "../ui/separator";
import { CgLogOut } from "react-icons/cg";
import SearchInput from "./SearchInput";
import Chat from "./Chat";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-4 border-r border-r-black p-4">
      <SearchInput />
      <Separator />
      <Chat />
      <Button className="cursor-pointer mt-auto">
        <CgLogOut /> Logout
      </Button>
    </div>
  );
};

export default Sidebar;
