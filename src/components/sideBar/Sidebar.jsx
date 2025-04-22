import React from "react";

import { Button } from "../ui/button";

import { Separator } from "../ui/separator";
import { CgLogOut } from "react-icons/cg";
import SearchInput from "./SearchInput";
import Chat from "./Chat";
import { useDispatch } from "react-redux";
import { LogoutUser } from "@/store/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Sidebar = ({ selectedUser, setSelectedUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //this is for redirecting in login page
  const handleLogout = async () => {
    try {
      await dispatch(LogoutUser()).unwrap();
      toast.success("You are logged out successfully");
      navigate("/");
    } catch (error) {
      toast.error("logout failed. Try again later");
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-4 border-r border-r-black p-4">
      <SearchInput />
      <Separator />
      <Chat selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <Button onClick={handleLogout} className="cursor-pointer mt-auto">
        <CgLogOut /> Logout
      </Button>
    </div>
  );
};

export default Sidebar;
