import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { sub } from "date-fns";
import {
  getPosts,
  newPost,
  deletePost,
  editPost,
} from "../asynTunk/postsThunk";

const initialState = { posts: [], bookmarks: [], isLoading: false };

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(content, userId) {
        return {
          payload: {
            id: nanoid(),
            data: new Date().toISOString(),
            content,
            user: userId,
            reactions: {
              thumbsUp: 0,
              heart: 0,
            },
          },
        };
      },
    },
    postUpdated(state, action) {
      const { id, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.content = content;
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);

      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },

    [getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      // console.error(action?.error?.message);
    },
    [newPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [newPost.rejected]: (state, action) => {
      state.isLoading = false;
      // toast.error(action.payload.data.errors[0]);
    },
    [editPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [editPost.rejected]: (state, action) => {
      state.isLoading = false;
      // toast.error(action?.payload?.data?.errors[0]);
    },
    [deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      // toast.error(action?.payload?.data?.errors[0]);
    },
  },
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
