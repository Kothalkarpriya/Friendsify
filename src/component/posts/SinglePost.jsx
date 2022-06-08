import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

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
        <p>{post.content}</p>
        <Link to={`/editPost/${post.id}`}>Edit Post</Link>
      </article>
    </section>
  );
}
