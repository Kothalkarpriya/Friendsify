import "../../assests/styles/createpost.css";
import {
  AiOutlineFileGif,
  AiOutlineFileImage,
  AiOutlineSmile,
} from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

export default function CreatePost() {
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onContentChange = (event) => setContent(event.target.value);

  const onSavePostClicked = () => {
    if (content) {
      dispatch(postAdded(content));
      setContent("");
    }
  };

  const canSave = Boolean(content);

  return (
    <section className="post-container">
      <form className="create-post-form">
        <div className="image">
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
            value={content}
            onChange={onContentChange}
          ></textarea>
          <div className="btn-container">
            <div className="create-post-icon">
              <AiOutlineFileImage className="icon" />
              <AiOutlineFileGif className="icon" />
              <AiOutlineSmile className="icon" />
            </div>
            <button
              className="btn btn-left"
              onClick={onSavePostClicked}
              disabled={!canSave}
              type="button"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </section>
  );
} 
