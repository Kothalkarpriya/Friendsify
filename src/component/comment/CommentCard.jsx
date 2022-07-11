import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../redux/asynTunk/postsThunk";
import { EditComment } from "../component";
import { useState } from "react";
import "../../assests/styles/comment.css";

export default function CommentCard({ comment, postId }) {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [modalDisplay, setModalDisplay] = useState(false);
  const isCurrentUserLoggedInUserComment = user.username === comment.username;

  const deleteCommentHandler = async () => {
    dispatch(deleteComment({ postId, commentId: comment._id, token }));
  };
  return (
    <section className="comment-card">
      {modalDisplay && (
        <EditComment modalDisplay comment={comment} postId={postId} />
      )}
      <div className="comment-content">
        <p className="user-name text-align-left">@{comment.username}</p>
        <p className="user-comment ">{comment.commentData}</p>
      </div>

      {isCurrentUserLoggedInUserComment ? (
        <div className="btn-container">
          <button
            type="text"
            className="btn btn-left"
            onClick={() => {
              if (modalDisplay === true) {
                setModalDisplay(false);
              } else {
                setModalDisplay(true);
              }
            }}
          >
            Edit
          </button>
          <button
            type="text"
            onClick={deleteCommentHandler}
            className="btn btn-left"
          >
            Delete
          </button>
        </div>
      ) : null}
    </section>
  );
}
