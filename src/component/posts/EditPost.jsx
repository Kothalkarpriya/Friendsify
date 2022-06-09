import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { postUpdated } from "../../redux/slices/postsSlice";
import "../../assests/styles/post-css.css";

export default function EditPost({ match }) {
  const { postId } = useParams();

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );
  
  const [content, setContent] = useState(post.content);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onContentChange = (event) => setContent(event.target.value);

  const onPostSaveBtnClick = () => {
    if (content) {
      dispatch(postUpdated({ id: postId, content }));
      navigate(`/posts/${postId}`);
    }
  };

  return (
    <section className="single-post">
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
          <form>
            <textarea
              id="postContent"
              name="postContent"
              value={content}
              onChange={onContentChange}
            />
          </form>
          <button type="button"  className="btn btn-left" onClick={onPostSaveBtnClick}>
            Save Post
          </button>
        </div>
      </article>
    </section>
  );
}
