import "../../assests/styles/userlist.css";
import "../../assests/styles/createpost.css";
import { v4 as uuid } from "uuid";
import { AiOutlineMessage, AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { BsBookmarkDash, BsThreeDots } from "react-icons/bs";
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
    const response = dispatch(deletePost({ post, token }));
    try {
      if (response?.payload.status === 200) {
        console.log("Post deleted successfully");
      } else {
        console.log(`${response.payload.data.errors[0]}`);
      }
    } catch (error) {
      console.log(error);
    }
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

  const getDate = (createdAt) => {
    const date = new Date(createdAt).toLocaleString("en-In", {
      day: "2-digit",
    });

    const month = new Date(createdAt).toLocaleString("en-In", {
      month: "short",
    });

    const year = new Date(createdAt).getFullYear();
    return `${date} ${month} ${year}`;
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
        <div className="post-data" key={post.id}>
          <div className="post-username">
            <p className="user-name text-align-left">
              {post?.firstname} {post?.lastname}
            </p>
            <p className="user-name">@{post?.username}</p>
            <p>{getDate(post?.createdAt)}</p>
            <BsThreeDots />
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

            <AiOutlineMessage className="icon" />

            <BsBookmarkDash className="icon" onClick={bookmarkPostHandler} />
            {isCurrentUserPost && (
              <>
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
                  Edit Post
                </button>
                <button
                  type="text"
                  onClick={deletePostHandler}
                  className="btn btn-left"
                >
                  Delete Post
                </button>
              </>
            )}
          </div>
          <CommentBox postId={uuid()} />
          <p className="heading">Comments:</p>
          {latestCommentsOnTopArray.length
            ? latestCommentsOnTopArray.map((comment) => (
                <CommentCard
                  comment={comment}
                  postId={post._id}
                  key={post.__id}
                />
              ))
            : null}
        </div>
        {isCurrentUserPost && modalDisplay ? (
          <EditPost
            modalDisplay
            isEditPost={true}
            postEditData={post}
            key={post.id}
          />
        ) : null}
      </article>
    </section>
  );
}
