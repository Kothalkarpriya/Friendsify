import { createSlice } from "@reduxjs/toolkit";
import { getUsers, followUser, unfollowUser } from "../asynTunk/usersThunk";

const initialState = { users: [], isLoading: false };

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload.data.users;
    },
    [getUsers.rejected]: (state) => {
      state.isLoading = false;
    },
    [followUser.pending]: (state) => {
      state.isLoading = true;
    },
    [followUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload.data.users;
    },
    [followUser.rejected]: (state) => {
      state.isLoading = false;
    },
    [unfollowUser.pending]: (state) => {
      state.isLoading = true;
    },
    [unfollowUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload.data.users;
    },
    [unfollowUser.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default usersSlice.reducer;
