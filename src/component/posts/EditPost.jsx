import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { newPost, editPost } from "../../redux/asynTunk/postsThunk";
import "../../assests/styles/post-css.css";

export default function EditPost({
  modalDisplay,
  isEditPost = false,
  postEditData = {},
}) {
  const [postDetail, setPostDetail] = useState({
    content: isEditPost ? postEditData.content : "",
  });
  const [modal, setModal] = useState(modalDisplay);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const createPost = (data) => {
    try {
      dispatch(newPost({ postData: data, token }));
      // if (response?.payload.status === 201) {
      //   console.log("Post Added successfully!");
      // } else {
      //   console.log(response.payload.data.errors[0]);
      // }
      setPostDetail({ content: "" });
      closePostHandler();
    } catch (error) {
      console.log(error);
    }
  };

  const editPostAction = (updatedData) => {
    try {
      dispatch(
        editPost({ postData: { ...postEditData, content: updatedData }, token })
      );
      // if (response?.payload.status === 201) {
      //   console.log("Post Updated successfully!");
      // } else {
      //   console.log(response.payload.data.errors[0]);
      // }

      closePostHandler();
    } catch (error) {
      console.log(error);
    }
  };

  const closePostHandler = () => {
    if (!isEditPost) {
      setPostDetail({ content: "" });
    }
  };

  const addPostHandler = () => {
    if (postDetail.content !== "") {
      createPost(postDetail);
    } else {
      console.log("Post Content can not be empty");
    }
  };
  const editPostHandler = () => {
    if (postDetail.content !== "") {
      const editData = postDetail.content;
      editPostAction(editData);
    } else {
      console.log("Post Can't be empty");
    }
    closePostHandler();
  };

  return (
    <section
      className={`${
        modal ? "modal-display-wrap" : "display-none"
      } && single-post`}
    >
      <h2>{isEditPost ? "EditPost" : "Create Post"}</h2>
      <article className="playlist-modal">
        <div className="image">
          <img
            src="https://picsum.photos/200"
            alt="user profile"
            className="avatar-image round-image"
          />
        </div>
        <div className="post-data">
          <form>
            <textarea
              id="postContent"
              name="postContent"
              value={postDetail.content}
              onChange={(e) => {
                setPostDetail((prev) => ({ ...prev, content: e.target.value }));
              }}
            />
          </form>
          <div className="btn-container">
            <button
              className="btn btn-left"
              onClick={() => setModal((modal) => !modal)}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-left"
              onClick={isEditPost ? editPostHandler : addPostHandler}
            >
              {isEditPost ? "Update" : "Post"}
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
