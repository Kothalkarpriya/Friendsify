import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../asynTunk/usersThunk";

const initialState = { users: [], isLoading: false };
// [
//   { id: "0", name: "Tianna Jenkins" },
//   { id: "1", name: "Kevin Grant" },
//   { id: "2", name: "Madison Price" },
// ];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload.data.users;
    },
    [getUsers.rejected]: (state, action) => {
      state.isLoading = false;
      console.error(action.payload.data.errors[0]);
    },
  },
});

export default usersSlice.reducer;