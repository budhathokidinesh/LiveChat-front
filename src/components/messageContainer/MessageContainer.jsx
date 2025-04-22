import React from "react";
import MsgContainer from "../messages/MsgContainer";

const MessageContainer = ({ selectedUser }) => {
  return (
    <div>
      <MsgContainer selectedUser={selectedUser} />
    </div>
  );
};

export default MessageContainer;
