import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chats/chatsSlice.js";
import userSlice from "./user/userSlice.js";

const store = configureStore({
  reducer: {
    chat: chatSlice,
    user: userSlice,
  },
});
export default store;
