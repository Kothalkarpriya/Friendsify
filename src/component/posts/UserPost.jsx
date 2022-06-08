import "../../assests/styles/userlist.css";
import "../../assests/styles/createpost.css";
import {
  AiOutlineMessage,
} from "react-icons/ai";
import { BsBookmarkDash, BsThreeDots } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import PostAuthors from "./PostAuthors";
import { TimeAgo } from "./TimeAgo";
import { ReactionBtn } from "./ReactionBtn";

export default function UserPost() {
  const posts = useSelector((state) => state.posts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
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
          <p className="user-name text-align-left">UserName</p>
          <TimeAgo timestamp={post.date} />
          <BsThreeDots />
        </div>
        {/* <PostAuthors userId={post.user} /> */}

        <p className="user-post text-align-left">
          {post.content.substring(0, 100)}
        </p>

        <div className="create-post-icon">
          <ReactionBtn post={post} />
          <AiOutlineMessage className="icon" />
          <BsBookmarkDash className="icon" />
          <button type="button " className="btn btn-left">
            <Link className="Link" to={`/posts/${post.id}`}>
              View Post
            </Link>
          </button>
        </div>
      </div>
    </article>
  ));
  return (
    <section className="user-post-container col-post">{renderedPosts}</section>
  );
}
