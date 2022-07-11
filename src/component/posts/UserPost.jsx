import "../../assests/styles/userlist.css";
import "../../assests/styles/createpost.css";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { BsBookmarkDash } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { EditPost, CommentBox, CommentCard } from "../component";
import { useState } from "react";
import {
  bookmarkPost,
  removeBookMarkedPost,
} from "../../redux/asynTunk/authTunk";
import {
  deletePost,
  likedPost,
  dislikedPost,
} from "../../redux/asynTunk/postsThunk";

export default function UserPost({ post }) {
  const dispatch = useDispatch();
  const [modalDisplay, setModalDisplay] = useState(false);
  const { token, bookmarks, user } = useSelector((state) => state.auth);

  const alreadyBookmarked = bookmarks.some(
    (bookmarkedpost) => bookmarkedpost === post._id
  );

  const bookmarkPostHandler = () => {
    if (alreadyBookmarked) {
      dispatch(removeBookMarkedPost({ postId: post._id, token }));
    } else {
      dispatch(bookmarkPost({ postId: post._id, token }));
    }
  };

  const isCurrentUserPost = user.username === post.username;

  const deletePostHandler = () => {
    dispatch(deletePost({ post, token }));
  };

  const {
    likes: { likedBy, likeCount },
    comments,
  } = post;

  const isPostAlreadyLiked = likedBy.some(
    (like) => like.username === user?.username
  );

  const likePostHandler = () => {
    isPostAlreadyLiked
      ? dispatch(dislikedPost({ post, token }))
      : dispatch(likedPost({ post, token }));
  };

  const latestCommentsOnTopArray = [...comments].reverse();
  return (
    <section className="user-post-container col-post">
      <article>
        <div className="image">
          <img
            src={user.profilePic}
            alt="user profile"
            className="avatar-image round-image"
          />
        </div>
        <div className="post-data">
          <div className="post-username">
            <p className="user-name">@{post?.username}</p>
            {isCurrentUserPost && (
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
                  onClick={deletePostHandler}
                  className="btn btn-left"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
          <p className="user-post text-align-left">{post?.content}</p>
          <div className="create-post-icon">
            <span>
              {isPostAlreadyLiked ? (
                <AiTwotoneLike className="icon" onClick={likePostHandler} />
              ) : (
                <AiOutlineLike className="icon" onClick={likePostHandler} />
              )}
              <p>{likeCount}</p>
            </span>
            <CommentBox postId={post._id} />
            <BsBookmarkDash className="icon" onClick={bookmarkPostHandler} />
          </div>
          <p className="heading">Comments:</p>
          {latestCommentsOnTopArray.length
            ? latestCommentsOnTopArray.map((comment) => (
                <CommentCard
                  comment={comment}
                  postId={post._id}
                  key={post._id}
                />
              ))
            : null}
        </div>
        {isCurrentUserPost && modalDisplay ? (
          <EditPost
            modalDisplay
            isEditPost={true}
            postEditData={post}
            key={post._id}
          />
        ) : null}
      </article>
    </section>
  );
}
