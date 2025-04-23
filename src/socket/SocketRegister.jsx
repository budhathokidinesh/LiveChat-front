import { useEffect } from "react";
import { useSelector } from "react-redux";
import socket from "@/socket";

const SocketRegister = () => {
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user?.id) {
      socket.emit("register-user", user?.id);
    }
  }, [user]);

  return null;
};

export default SocketRegister;
