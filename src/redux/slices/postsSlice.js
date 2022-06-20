import { createSlice, nanoid } from "@reduxjs/toolkit";
import {
  getPosts,
  newPost,
  deletePost,
  editPost,
  likedPost,
  dislikedPost,
  addComment,
  deleteComment,
  editComment,
} from "../asynTunk/postsThunk";

const initialState = { posts: [], bookmarks: [], isLoading: false };

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
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
    [getPosts.rejected]: (state) => {
      state.isLoading = false;
    },
    [newPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [newPost.rejected]: (state) => {
      state.isLoading = false;
    },
    [editPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [editPost.rejected]: (state) => {
      state.isLoading = false;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [deletePost.rejected]: (state) => {
      state.isLoading = false;
    },
    [likedPost.pending]: (state) => {
      state.isLoading = true;
    },
    [likedPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [likedPost.rejected]: (state) => {
      state.isLoading = false;
    },
    [dislikedPost.pending]: (state) => {
      state.isLoading = true;
    },
    [dislikedPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [dislikedPost.rejected]: (state) => {
      state.isLoading = false;
    },
    [addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [addComment.rejected]: (state) => {
      state.isLoading = false;
    },
    [editComment.pending]: (state) => {
      state.isLoading = true;
    },
    [editComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data.posts;
    },
    [editComment.rejected]: (state) => {
      state.isLoading = false;
    },
    [deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.posts = action.payload.data.posts;
    },
    [deleteComment.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
