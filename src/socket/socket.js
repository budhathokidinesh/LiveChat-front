import { io } from "socket.io-client";
const socket = io("https://dns-livechat.netlify.app", {
  withCredentials: true,
});

export default socket;
