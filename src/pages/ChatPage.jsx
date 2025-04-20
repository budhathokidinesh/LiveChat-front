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
    <div className="flex flex-col h-screen max-w-md mx-auto border rounded-lg overflow-hidden shadow-lg">
      <h2 className="font-extrabold text-3xl text-center m-3 text-red-700">
        Welcome to live chat
      </h2>
      {/* chat box  */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-100">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs px-4 py-2 rounded-lg ${
              msg.self
                ? "bg-green-500 text-white self-end ml-auto"
                : "bg-blue-500 text-white self-start"
            }`}
          >
            {msg.message}
          </div>
        ))}
      </div>
      <div>
        <Input
          className="flex items-center gap-2 p-4 border-t bg-white"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
        />
        <Button onClick={sendMessage} className="hover:cursor-pointer">
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatPage;
