import "../../assests/styles/createpost.css";
import {
  AiOutlineFileGif,
  AiOutlineFileImage,
  AiOutlineSmile,
} from "react-icons/ai";

export default function CreatePost() {
  return (
    <section className="post-container">
      <div className="image">
        <img
          src="https://picsum.photos/200"
          alt="user profile"
          className="avatar-image round-image"
        />
      </div>
      <div className="post-data">
        <textarea placeholder="Write something interesting..." className="post-text"></textarea>
        <div className="btn-container">
          <div className="create-post-icon">
            <AiOutlineFileImage className="icon"/>
            <AiOutlineFileGif className="icon"/>
            <AiOutlineSmile className="icon"/>
          </div>
          <button className="btn btn-left">Post</button>
        </div>
      </div>
    </section>
  );
}
