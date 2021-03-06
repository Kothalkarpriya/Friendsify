import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getPosts = createAsyncThunk("posts/getPosts", async (rejectWithValue) => {
  try {
    const response = await axios.get("api/posts");
    const data = { data: response.data, status: response.status };
    return data;
  } catch (error) {
    rejectWithValue({
      data: error.response.data,
      status: error.response.status,
    });
  }
});

const newPost = createAsyncThunk(
  "posts/newPost",
  async ({ postData, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "/api/posts",
        { postData },
        { headers: { authorization: token } }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ postData, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/posts/edit/${postData._id}`,
        { postData },
        { headers: { authorization: token } }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ post, token }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/api/posts/${post._id}`, {
        headers: { authorization: token },
      });
      const data = { data: response.data, status: response.status };

      return data;
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

const likedPost = createAsyncThunk(
  "posts/likedPost",
  async ({ post, token }, { rejectWithValue }) => {
    try {
      const response = axios.post(
        `/api/posts/like/${post._id}`,
        {},
        { headers: { authorization: token } }
      );

      const data = { data: (await response).data, status: response.status };
      return data;
    } catch (error) {
      rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

const dislikedPost = createAsyncThunk(
  "posts/dislikedPost",
  async ({ post, token }, { rejectWithValue }) => {
    try {
      const response = axios.post(
        `/api/posts/dislike/${post._id}`,
        {},
        { headers: { authorization: token } }
      );

      const data = {
        data: (await response).data,
        status: response.status,
      };

      return data;
    } catch (error) {
      rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);
const addComment = createAsyncThunk(
  "posts/addComment",
  async ({ postId, commentData, token: encodedToken }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/comments/add/${postId}`,
        { commentData },
        { headers: { authorization: encodedToken } }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const editComment = createAsyncThunk(
  "posts/editComment",
  async ({ postId, commentId, token, commentData }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/api/comments/edit/${postId}/${commentId}`,
        { commentData },
        { headers: { authorization: token } }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const deleteComment = createAsyncThunk(
  "posts/deleteComment",
  async ({ postId, commentId, token: encodedToken }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `/api/comments/delete/${postId}/${commentId}`,
        { headers: { authorization: encodedToken } }
      );
      const data = { data: response.data, status: response.status };
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export {
  getPosts,
  newPost,
  deletePost,
  editPost,
  likedPost,
  dislikedPost,
  addComment,
  deleteComment,
  editComment,
};
