import "../../assests/styles/createpost.css";
// import {
//   AiOutlineFileGif,
//   AiOutlineFileImage,
//   AiOutlineSmile,
// } from "react-icons/ai";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const onTitleChange = (event) => setTitle(event.target.value);
  const onContentChange = (event) => setContent(event.target.value);
  const onAuthorChange = (event) => setUserId(event.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

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
        <select value={userId} onChange={onAuthorChange}>
          <option value=""></option>
          {usersOptions}
        </select>
        <textarea
          placeholder="Write something interesting..."
          className="post-text"
          value={content}
          onChange={onContentChange}
        ></textarea>
        <button
          className="btn btn-left"
          onClick={onSavePostClicked}
          disabled={!canSave}
          type="button"
        >
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
