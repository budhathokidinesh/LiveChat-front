import React, { useEffect, useRef } from "react";
import Msg from "./Msg";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, fetcheMessages } from "@/store/message/messageSlice";
import socket from "@/socket";

const Messages = ({ userId }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { messages } = useSelector((state) => state.message);

  // Ref to the container that holds the messages
  const messagesEndRef = useRef(null);
  //this is for fetching messages
  useEffect(() => {
    if (userId && userId !== user?._id) {
      dispatch(fetcheMessages(userId));
    }
  }, [userId, dispatch, user?._id]);

  //this is for listning real time messages
  useEffect(() => {
    socket.on("receive-message", (message) => {
      dispatch(addMessage(message));
    });
    return () => {
      socket.off("receive-message");
    };
  }, [dispatch]);

  // Scroll to the last message whenever messages are updated
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // This hook runs whenever messages change

  return (
    <div className="px-4 flex-1 overflow-auto cursor-pointer scrollbar-hide">
      {messages.length === 0 && (
        <p className="text-center">Send messages to start conversation.</p>
      )}
      {messages?.map((msg) => (
        <Msg
          key={msg._id}
          message={msg}
          isOwnMessage={msg.senderId === user?._id}
        />
      ))}
      {/* Reference to scroll to this div for auto-scrolling */}

      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
