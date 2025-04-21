import MessageContainer from "@/components/messageContainer/MessageContainer";
import Sidebar from "@/components/sideBar/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import socket from "@/socket";

import { useEffect, useState } from "react";
const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  //this is for recieving the message
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected", socket.id);
    });
    //this is for listen for message
    socket.on("recieve-message", (data) => {
      setMessages((prev) => [...prev, data]);
    });
    //clean up on unmount
    return () => {
      socket.off("recieve-message");
    };
  }, []);
  //this is for sending the message
  const sendMessage = () => {
    if (!message) return;
    socket.emit("send-message", { message });
    setMessages((prev) => [...prev, { message, self: true }]);
    setMessage("");
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-[70%]  p-10 flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar />

        <MessageContainer />
      </div>
    </div>
  );
};

export default ChatPage;
