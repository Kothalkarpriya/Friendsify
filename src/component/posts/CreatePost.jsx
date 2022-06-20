import "../../assests/styles/createpost.css";
import {
  AiOutlineFileGif,
  AiOutlineFileImage,
  AiOutlineSmile,
} from "react-icons/ai";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newPost } from "../../redux/asynTunk/postsThunk";

export default function CreatePost({ isEditPost = false, postEditData = {} }) {
  const [postDetail, setPostDetail] = useState({
    content: isEditPost ? postEditData.content : "",
  });

  const { token } = useSelector((state) => state.auth);

  const createPost = (data) => {
    try {
      const response = dispatch(newPost({ postData: data, token }));
      if (response.payload?.status === 201) {
        console.log("Post created !");
      } else {
        console.log(response.payload.data.errors[0]);
      }
      setPostDetail({ content: "" });
    } catch (error) {
      console.log(error);
    }
  };
  const addPostHandler = () => {
    if (postDetail.content !== "") {
      createPost(postDetail);
    } else {
      console.log("Post Content can not be empty");
    }
  };
  const dispatch = useDispatch();
  return (
    <section className="post-container">
      <form className="create-post-form">
        <div className="image">
          <img
            src="https://picsum.photos/200"
            alt="user profile"
            className="avatar-image round-image"
          />
        </div>
        <div className="post-data">
          <textarea
            placeholder="Write something interesting..."
            className="post-text"
            value={postDetail.content}
            onChange={(e) => {
              setPostDetail((prev) => ({ ...prev, content: e.target.value }));
            }}
          ></textarea>
          <div className="btn-container">
            <div className="create-post-icon">
              <AiOutlineFileImage className="icon" />
              <AiOutlineFileGif className="icon" />
              <AiOutlineSmile className="icon" />
            </div>
            <button
              className="btn btn-left"
              onClick={isEditPost ? "" : addPostHandler}
              type="button"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
