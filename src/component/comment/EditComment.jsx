import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editComment } from "../../redux/asynTunk/postsThunk";
import "../../assests/styles/post-css.css";

export default function EditComment({ modalDisplay, comment, postId }) {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(modalDisplay);
  const [commentDetail, setCommentDetail] = useState(comment.commentData || "");
  const editCommentHandler = async () => {
    if (commentDetail === "") {
      console.log("Comment can not be empty");
    } else {
      const response = await dispatch(
        editComment({
          postId,
          commentId: comment._id,
          commentData: commentDetail,
          token,
        })
      );

      if (response?.payload.status === 201) {
        console.log("COmment has been edited");
      } else {
        console.log(response);
      }
      closeHandler();
    }
  };

  const closeHandler = () => {
    setModal((modal) => !modal);
  };

  return (
    <section
      className={`${
        modal ? "modal-display-wrap" : "display-none"
      } && single-post comment-modal`}
    >
      <h2>Editing Comment</h2>
      <article className="playlist-modal">
        <input
          name="comment"
          value={commentDetail}
          onChange={(e) => setCommentDetail(e.target.value)}
        />

        <div className="btn-container">
          <button type="text" className="btn btn-left" onClick={closeHandler}>
            Close
          </button>
          <button
            type="text"
            onClick={editCommentHandler}
            className="btn btn-left"
          >
            Update
          </button>
        </div>
      </article>
    </section>
  );
}
