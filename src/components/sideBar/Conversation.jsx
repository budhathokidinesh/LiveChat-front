import React, { useEffect } from "react";
import { Separator } from "../ui/separator";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "@/store/users/userSlice";

const Conversation = ({ selectedUser, setSelectedUser }) => {
  const dispatch = useDispatch();
  const { userList, isLoading } = useSelector((state) => state.chatUser);
  console.log("👉 selectedUser:", selectedUser);
  //this is for fetching all users
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  if (isLoading) {
    return <div>Loading</div>;
  }
  console.log(userList, "userlist");
  return (
    <>
      {userList?.map((user) => (
        <div
          key={user?._id}
          onClick={() => {
            console.log("🔍 You clicked:", user.name);
            setSelectedUser(user);
          }}
          className={`flex gap-2 items-center  rounded-2xl p-2 py-2 cursor-pointer ${
            selectedUser?._id === user?._id ? "bg-sky-500" : "hover:bg-sky-500"
          }`}
        >
          <div className="profile online ">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={user?.picture || "./profile.jpg"}
                alt="user profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
              <p className="font-bold text-gray-200">{user?.name}</p>
              <span className="text-xl">🤓</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Conversation;
