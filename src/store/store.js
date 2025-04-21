import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chats/chatsSlice.js";
import userSlice from "./auth/authSlice.js";

const store = configureStore({
  reducer: {
    chat: chatSlice,
    user: userSlice,
  },
});
export default store;
