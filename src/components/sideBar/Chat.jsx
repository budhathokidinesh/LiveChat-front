import React from "react";
import Conversation from "./Conversation";

const Chat = ({ selectedUser, setSelectedUser }) => {
  return (
    <div className="py-3 flex flex-col overflow-auto gap-2">
      <Conversation
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
    </div>
  );
};

export default Chat;
