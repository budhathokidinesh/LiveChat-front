import { getAllChats } from "@/store/chats/chatsSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ChatPage = () => {
  const dispatch = useDispatch();

  const { chatList } = useSelector((state) => state.chat);

  useEffect(() => {
    dispatch(getAllChats());
  }, [dispatch]);
  console.log(chatList, "ChatList");
  return (
    <div>
      {chatList.map((chat) => (
        <li key={chat._id}>{chat.chatName}</li>
      ))}
    </div>
  );
};

export default ChatPage;
