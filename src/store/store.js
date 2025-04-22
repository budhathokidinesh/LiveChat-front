import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chats/chatsSlice.js";
import userSlice from "./auth/authSlice.js";
import chatUsersSlice from "./users/userSlice.js";
import messageSlice from "./message/messageSlice.js";

const store = configureStore({
  reducer: {
    chat: chatSlice,
    user: userSlice,
    chatUser: chatUsersSlice,
    message: messageSlice,
  },
});
export default store;
