import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
// import PostAuthors from "./PostAuthors";
import "../../assests/styles/post-css.css";

export default function SinglePost({ match }) {
  const { postId } = useParams();
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  if (!post) {
    return (
      <section>
        <h2>Post not Found!</h2>
      </section>
    );
  }

  return (
    <section className="single-post">
      {/* <div>
          <PostAuthors userId={post.user} />
        </div> */}
      <h2>Editing Post</h2>
      <article>
        <div className="image">
          <img
            src="https://picsum.photos/200"
            alt="user profile"
            className="avatar-image round-image"
          />
        </div>
        <div className="post-data">
          <p>{post.content}</p>
          <button type="text" className="btn btn-left">
            <Link className="Link" to={`/editPost/${post.id}`}>
              Edit Post
            </Link>
          </button>
        </div>
      </article>
    </section>
  );
}
