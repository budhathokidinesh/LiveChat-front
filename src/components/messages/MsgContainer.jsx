import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { IoIosChatboxes } from "react-icons/io";
import { useSelector } from "react-redux";

const MsgContainer = ({ selectedUser }) => {
  const { user } = useSelector((state) => state.user);
  console.log("✅ Logged-in user:", user); // from Redux

  console.log("💡 MsgContainer selectedUser:", selectedUser);
  return (
    <div className="md:min-w-[450px] flex flex-col h-full ">
      {!selectedUser ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header  */}
          <div className="bg-slate-700 px-4 py-2 mb-2 rounded-2xl">
            <span className="label-text text-gray-400">To: </span>
            <span className="text-gray-400 font-bold">
              {selectedUser?.name}
            </span>
          </div>
          <Messages userId={selectedUser._id} />
          <MessageInput receiverId={selectedUser._id} />
        </>
      )}
    </div>
  );
};

export default MsgContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Hi Dinesh</p>
        <p>Select a chat to start messaging</p>
        <IoIosChatboxes className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
