import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL;

const initialState = {
  isLoading: false,
  messages: [],
};

//this is for fetching all messages
export const fetcheMessages = createAsyncThunk(
  "messages/fetchMessages",
  async (receiverId) => {
    const response = await axios.get(`${BASE_URL}/api/message/${receiverId}`, {
      withCredentials: true,
    });
    return response.data;
  }
);

//this is for sending messages
export const sendMessages = createAsyncThunk(
  "messages/sendMessages",
  async ({ receiverId, message }) => {
    const response = await axios.post(
      `${BASE_URL}/api/message/send/${receiverId}`,
      {
        message,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  }
);

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.messages = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetcheMessages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetcheMessages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.messages = action.payload;
      })
      .addCase(fetcheMessages.rejected, (state) => {
        state.isLoading = false;
        state.messages = [];
      })
      .addCase(sendMessages.fulfilled, (state, action) => {
        state.messages.push(action.payload);
      });
  },
});

export const { resetMessage } = messageSlice.actions;
export default messageSlice.reducer;
