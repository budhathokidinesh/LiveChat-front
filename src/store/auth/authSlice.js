import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

//this is initial state
const initialState = {
  isLoading: false,
  user: null,
  error: null,
  uploadImage: null,
};
//this is register user asyncthunk
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (formData) => {
    const response = await axios.post(
      `${BASE_URL}/api/auth/register`,
      formData
    );
    return response.data;
  }
);

//this is for login user
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (formData) => {
    const response = await axios.post(`${BASE_URL}/api/auth/login`, formData, {
      withCredentials: true,
    });
    return response.data;
  }
);

//this is for logout user
export const LogoutUser = createAsyncThunk("/user/logoutUser", async () => {
  const response = await axios.post(`${BASE_URL}/api/auth/logout`);
  return response.data;
});

//this is for uploading image
export const uploadImage = createAsyncThunk(
  "user/uploadImage",
  async (file) => {
    const formData = new FormData();
    formData.append("profilePic", file);
    const response = await axios.post(
      `${BASE_URL}/api/auth/upload-image`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  }
);

//this is slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => {
      state.user = null;
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user || null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user : null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(uploadImage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.uploadedImage = {
          url: action.payload.url,
          public_id: action.payload.public_id,
        };
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.isLoading = false;
        state.uploadedImage = null;
        state.error = action.error.message || "Image upload failed";
      })
      .addCase(LogoutUser.fulfilled, (state) => {
        (state.isLoading = false), (state.user = null);
      });
  },
});
export const { resetUser } = userSlice.actions;
export default userSlice.reducer;
