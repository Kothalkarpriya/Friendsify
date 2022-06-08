import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../component/posts/postsSlice";
import usersReducer from "../component/user/userSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
