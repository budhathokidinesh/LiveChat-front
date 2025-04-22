import React from "react";

const RecMsg = ({ message }) => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 h-10 rounded-full">
          <img src="./profile.jpg" alt="chat bubble component" />
        </div>
      </div>
      <div className="chat-bubble bg-blue-500 rounded-2xl">
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

export default RecMsg;
