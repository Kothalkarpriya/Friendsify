import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../component/posts/postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
