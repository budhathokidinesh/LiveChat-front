import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL.replace(/\/+$/, "");

const initialState = {
  isLoading: false,
  userList: [],
};
//this is for fetching all users
export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  const result = await axios.get(`${BASE_URL}/api/users`, {
    withCredentials: true,
  });
  return result?.data;
});
const chatUserSlice = createSlice({
  name: "chatUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userList = action.payload;
      })
      .addCase(getAllUsers.rejected, (state) => {
        state.isLoading = false;
        state.userList = [];
      });
  },
});
export default chatUserSlice.reducer;
