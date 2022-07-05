import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";
import usersReducer from "./slices/userSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    auth: authReducer,
  },
  // middleware: getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
});
