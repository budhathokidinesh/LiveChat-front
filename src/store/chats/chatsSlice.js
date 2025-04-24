import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL.replace(/\/+$/, "");

const initialState = {
  isLoading: false,
  chatList: [],
};

export const getAllChats = createAsyncThunk("/chats/getAllChats", async () => {
  const result = await axios.get(`${BASE_URL}/api/chat`);
  return result?.data;
});

const ChatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllChats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllChats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chatList = action.payload;
      })
      .addCase(getAllChats.rejected, (state) => {
        state.isLoading = false;
        state.chatList = [];
      });
  },
});

export default ChatsSlice.reducer;
