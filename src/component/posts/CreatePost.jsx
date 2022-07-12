import "../../assests/styles/createpost.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newPost } from "../../redux/asynTunk/postsThunk";

export default function CreatePost({ isEditPost = false, postEditData = {} }) {
  const [postDetail, setPostDetail] = useState({
    content: isEditPost ? postEditData.content : "",
  });

  const { token, user } = useSelector((state) => state.auth);

  const createPost = (data) => {
    try {
      dispatch(newPost({ postData: data, token }));
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
            src={user.profilePic}
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
        </div>
        <div className="btn-container">
          <button
            className="btn btn-left"
            onClick={isEditPost ? "" : addPostHandler}
            type="button"
          >
            Create Post
          </button>
        </div>
      </form>
    </section>
  );
}
