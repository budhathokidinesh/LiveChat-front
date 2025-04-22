import MessageContainer from "@/components/messageContainer/MessageContainer";
import Sidebar from "@/components/sideBar/Sidebar";
import { useState } from "react";

const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-[70%]  p-10 flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar
          className="w-1/3 bg-gray-800 p-4"
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />

        <MessageContainer
          className="w-2/3 bg-gray-900 p-4"
          selectedUser={selectedUser}
        />
      </div>
    </div>
  );
};

export default ChatPage;
