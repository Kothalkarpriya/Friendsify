import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addComment } from "../../redux/asynTunk/postsThunk";
import "../../assests/styles/comment.css";

export default function CommentBox({ postId }) {
  const { user, token } = useSelector((state) => state.auth);
  const { profilePic } = user;
  const dispatch = useDispatch();
  const [commentData, setCommentData] = useState("");

  const addCommentHandler = async () => {
    if (commentData === "") {
      console.log("comment cannot be Empty");
    } else {
      dispatch(
        addComment({ postId, commentData, token })
      );
      // if (response?.payload?.status === 201) {
      //   console.log("Comments added successfully");
      // } else {
      //   console.log(`${response.payload.data.errors[0]}`);
      // }
      setCommentData("");
    }
  };
  return (
    <article className="comment-box">
      <div className="image">
        <img
          src={profilePic}
          alt="profile Pic"
          className="avatar-image round-image"
        />
      </div>
      <input
        value={commentData}
        placeholder="Comment here..."
        onChange={(e) => setCommentData(e.target.value)}
      />

      <button className="btn btn-left" onClick={addCommentHandler}>
        Post
      </button>
    </article>
  );
}
