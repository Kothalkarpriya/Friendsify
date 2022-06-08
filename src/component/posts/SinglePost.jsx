import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import PostAuthors from "./PostAuthors";

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
    <section>
      <article>
        <h2>{post.title}</h2>
        <div>
          <PostAuthors userId={post.user} />
        </div>
        <p>{post.content}</p>
        <Link to={`/editPost/${post.id}`}>Edit Post</Link>
      </article>
    </section>
  );
}
