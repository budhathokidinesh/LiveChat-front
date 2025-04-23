import React from "react";
import { useSelector } from "react-redux";

const Msg = ({ message }) => {
  const { user } = useSelector((state) => state.user);
  const { userList } = useSelector((state) => state.chatUser);

  const fromMe = message.senderId === user?.id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? user.picture
    : userList?.find((user) => user._id === message.senderId)?.picture;
  const bubbleColor = fromMe ? "bg-blue-500" : "";

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
