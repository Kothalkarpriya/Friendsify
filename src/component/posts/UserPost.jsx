import "../../assests/styles/userlist.css";
import "../../assests/styles/createpost.css";
import { AiOutlineMessage, AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { BsBookmarkDash, BsThreeDots } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { EditPost } from "../component";
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
// import { TimeAgo } from "./TimeAgo";

export default function UserPost({ post }) {
  const dispatch = useDispatch();
  const [modalDisplay, setModalDisplay] = useState(false);
  const { token, bookmarks, user } = useSelector((state) => state.auth);

  const alreadyBookmarked = bookmarks.some(
    (bookmarkedpost) => bookmarkedpost._id === post._id
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
      if (response?.payload.status === 201) {
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

  // const orderedPosts = post
  //   .slice()
  //   .sort((a, b) => b.date.localeCompare(a.date));

  // const renderedPosts = orderedPosts.map((post) => (

  // ));
  return (
    <section className="user-post-container col-post">
      <article>
        <div className="image">
          <img
            src="https://picsum.photos/200"
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
            {/* <TimeAgo timestamp={post.date} /> */}
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

            <span>
              <AiOutlineMessage className="icon" />
              {/* <p>{post.comments.length}</p> */}
            </span>

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
        </div>
        {isCurrentUserPost && modalDisplay ? (
          <EditPost modalDisplay isEditPost={true} postEditData={post} />
        ) : null}
      </article>
    </section>
  );
}
