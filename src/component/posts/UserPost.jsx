import "../../assests/styles/userlist.css";
import "../../assests/styles/createpost.css";
// import {
//   AiOutlineHeart,
//   AiOutlineMessage,
//   AiOutlineShareAlt,
// } from "react-icons/ai";
// import { BsBookmarkDash, BsThreeDots } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostAuthors from "./PostAuthors";
import { TimeAgo } from "./TimeAgo";
import { ReactionBtn } from "./ReactionBtn";

export default function UserPost() {
  const posts = useSelector((state) => state.posts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <div className="post-data" key={post.id}>
      <div className="post-username">
        <p className="user-name text-align-left">{post.title}</p>
        {/* <BsThreeDots /> */}
      </div>
      <div>
        <PostAuthors userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="user-post text-align-left">
        {post.content.substring(0, 100)}
      </p>
      <Link to={`/posts/${post.id}`}>View Post</Link>
      <div className="create-post-icon">
        <ReactionBtn post={post} />
        {/* <AiOutlineHeart className="icon" />
        <AiOutlineMessage className="icon" />
        <AiOutlineShareAlt className="icon" />
        <BsBookmarkDash className="icon" /> */}
      </div>
    </div>
  ));
  return (
    <section className="user-post-container col-post">
      {/* <div className="image">
        <img
          src="https://picsum.photos/200"
          alt="user profile"
          className="avatar-image round-image"
        />
      </div> */}
      {renderedPosts}
      {/* <div className="post-data">
        <div className="post-username">
          <p className="user-name text-align-left">UserName</p>
          <BsThreeDots />
        </div>
        <p className="user-post text-align-left">It is a post content</p>
        <div className="create-post-icon">
          <AiOutlineHeart className="icon" />
          <AiOutlineMessage className="icon" />
          <AiOutlineShareAlt className="icon" />
          <BsBookmarkDash className="icon" />
        </div>
      </div> */}
    </section>
  );
}
