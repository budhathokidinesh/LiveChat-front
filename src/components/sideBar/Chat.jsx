import React from "react";
import Conversation from "./Conversation";

const Chat = () => {
  return (
    <div className="py-3 flex flex-col overflow-auto gap-2">
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};

export default Chat;
