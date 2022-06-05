import "../../assests/styles/userlist.css";
import "../../assests/styles/createpost.css";
import {
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BsBookmarkDash, BsThreeDots } from "react-icons/bs";

export default function UserPost() {
  return (
    <section className="user-post-container">
      <div className="image">
        <img
          src="https://picsum.photos/200"
          alt="user profile"
          className="avatar-image round-image"
        />
      </div>
      <div className="post-data">
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
      </div>
    </section>
  );
}
