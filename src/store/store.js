import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chats/chatsSlice.js";

const store = configureStore({
  reducer: {
    chat: chatSlice,
  },
});
export default store;
