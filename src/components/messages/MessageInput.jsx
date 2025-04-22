import { sendMessages } from "@/store/message/messageSlice";
import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";

const MessageInput = ({ receiverId }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  //this is for sending message
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(sendMessages({ receiverId, message: text }));
    setText("");
  };
  return (
    <form onSubmit={handleOnSubmit} className="px-4 my-3 ">
      <div className="w-full relative">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border text-sm rounded-xl block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Type message here"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 hover:cursor-pointer"
        >
          <IoSendSharp />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
