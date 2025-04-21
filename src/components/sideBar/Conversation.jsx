import React from "react";
import { Separator } from "../ui/separator";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded-2xl p-2 py-2 cursor-pointer">
        <div className="profile online ">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src="./profile.jpg"
              alt="user profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">Dinesh Budhathoki</p>
            <span className="text-xl">🤓</span>
          </div>
        </div>
      </div>
      <div>
        <Separator />
      </div>
    </>
  );
};

export default Conversation;
