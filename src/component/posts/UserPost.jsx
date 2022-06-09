import "../../assests/styles/userlist.css";
import "../../assests/styles/createpost.css";
import { AiOutlineMessage } from "react-icons/ai";
import { BsBookmarkDash, BsThreeDots } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  bookmarkPost,
  removeBookMarkedPost,
} from "../../redux/asynTunk/authTunk";
// import PostAuthors from "./PostAuthors";
// import { TimeAgo } from "./TimeAgo";
import { ReactionBtn } from "./ReactionBtn";

export default function UserPost({ post }) {
  const dispatch = useDispatch();
  const { token, bookmarks } = useSelector((state) => state.auth);

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
            {/* <TimeAgo timestamp={post.date} /> */}
            <BsThreeDots />
          </div>
          {/* <PostAuthors userId={post.user} /> */}

          <p className="user-post text-align-left">{post?.content}</p>

          <div className="create-post-icon">
            {/* <ReactionBtn post={post} /> */}
            <AiOutlineMessage className="icon" />
            <BsBookmarkDash className="icon" onClick={bookmarkPostHandler} />
            <button type="button " className="btn btn-left">
              <Link className="Link" to={`/posts/${post.id}`}>
                View Post
              </Link>
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
