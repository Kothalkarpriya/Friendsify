import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { sub } from "date-fns";
import { getPosts } from "../asynTunk/postsThunk";

const initialState = { posts: [], bookmarks: [], isLoading: false };
// [
//   {
//     id: "1",
//     content: "Hello!",
//     date: sub(new Date(), { minutes: 10 }).toISOString(),
//     reactions: {
//       thumbsUp: 0,
//       heart: 0,
//     },
//   },
//   {
//     id: "2",
//     content: "More text",
//     date: sub(new Date(), { minutes: 5 }).toISOString(),
//     reactions: {
//       thumbsUp: 0,
//       heart: 0,
//     },
//   },
// ];

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
      console.error(action?.error?.message);
    },
  },
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
