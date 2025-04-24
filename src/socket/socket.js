import { io } from "socket.io-client";
const socket = io("https://livechat-back-7hsj.onrender.com", {
  withCredentials: true,
});

export default socket;
