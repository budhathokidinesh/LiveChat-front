import React from "react";
import { useSelector } from "react-redux";

const Msg = ({ message, isOwnMessage }) => {
  const { user } = useSelector((state) => state.user);
  const { userList } = useSelector((state) => state.chatUser);

  const chatClassName = isOwnMessage ? "chat-end" : "chat-start";
  const profilePic = isOwnMessage
    ? user?.picture
    : userList?.find((u) => u._id === message.senderId)?.picture;
  const bubbleColor = isOwnMessage ? "bg-blue-500" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 h-10 rounded-full">
          <img src={profilePic} alt="chat bubble component" />
        </div>
      </div>
      <div className={`chat-bubble rounded-2xl ${bubbleColor} pb-2`}>
        {message?.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {new Date(message.createdAt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    </div>
  );
};

export default Msg;
