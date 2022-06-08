import "../../assests/styles/createpost.css";
// import {
//   AiOutlineFileGif,
//   AiOutlineFileImage,
//   AiOutlineSmile,
// } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onTitleChange = (event) => setTitle(event.target.value);
  const onContentChange = (event) => setContent(event.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content));
      setTitle("");
      setContent("");
    }
  };

  return (
    <section className="post-container">
      <form>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />
        <textarea
          placeholder="Write something interesting..."
          className="post-text"
          value={content}
          onChange={onContentChange}
        ></textarea>
        <button className="btn btn-left" onClick={onSavePostClicked}>
          Post
        </button>
      </form>
      {/* <div className="image">
        <img
          src="https://picsum.photos/200"
          alt="user profile"
          className="avatar-image round-image"
        />
      </div>
      <div className="post-data">
        <textarea
          placeholder="Write something interesting..."
          className="post-text"
        ></textarea>
        <div className="btn-container">
          <div className="create-post-icon">
            <AiOutlineFileImage className="icon" />
            <AiOutlineFileGif className="icon" />
            <AiOutlineSmile className="icon" />
          </div>
          <button className="btn btn-left">Post</button>
        </div>
      </div> */}
    </section>
  );
}
