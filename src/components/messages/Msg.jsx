import React from "react";

const Msg = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 h-10 rounded-full">
          <img src="./profile.jpg" alt="chat bubble component" />
        </div>
      </div>
      <div className="chat-bubble bg-blue-500 rounded-2xl">Hi this is me</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        9:43
      </div>
    </div>
  );
};

export default Msg;
