import React, { useEffect } from "react";
import Msg from "./Msg";
import { useDispatch, useSelector } from "react-redux";
import { fetcheMessages } from "@/store/message/messageSlice";
import RecMsg from "./RecMsg";

const Messages = ({ userId }) => {
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.message);
  const { user } = useSelector((state) => state.user);
  //this is for fetching messages
  useEffect(() => {
    if (userId) {
      dispatch(fetcheMessages(userId));
    }
  }, [userId, dispatch]);

  return (
    <div className="px-4 flex-1 overflow-auto cursor-pointer scrollbar-hide">
      {messages?.map((msg) =>
        msg.senderId === user?._id ? (
          <Msg key={msg._id} message={msg} />
        ) : (
          <RecMsg key={msg._id} message={msg} />
        )
      )}
    </div>
  );
};

export default Messages;
