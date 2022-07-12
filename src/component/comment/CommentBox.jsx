import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addComment } from "../../redux/asynTunk/postsThunk";
import "../../assests/styles/comment.css";

export default function CommentBox({ postId }) {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [commentData, setCommentData] = useState("");

  const addCommentHandler = async () => {
    if (commentData === "") {
      console.log("comment cannot be Empty");
    } else {
      dispatch(
        addComment({ postId, commentData, token })
      );
      setCommentData("");
    }
  };
  return (
    <article className="comment-box">
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
