import "../../assests/styles/profile.css";
import "../../assests/styles/userlist.css";
import { UserPost } from "../../component/component";

export default function Profile() {
  return (
    <section className="profile-container">
      <div className="image">
        <img
          src="https://picsum.photos/200"
          alt="user profile"
          className="avatar-image round-image text-align-center"
        />
      </div>
      <p className="user-name">UserName</p>
      <div className="btn-container">
        <button className="btn btn-left">Edit Profile</button>
      </div>

      <p className="bio">Full stack Developer</p>
      <p className="portfolio">https://priya-kothalkar.netlify.app/</p>

      <div className="profile-data">
        <div className="follower-container">
          <span className="follower">
            <p className="count">0</p>
            <p className="follower-detail">Following</p>
          </span>
          <span className="follower">
            <p className="count">0</p>
            <p className="follower-detail">Posts</p>
          </span>
          <span className="follower">
            <p className="count">0</p>
            <p className="follower-detail">Following</p>
          </span>
        </div>
      </div>

      <div className="posts">
        <h2 className="heading">Your Posts </h2>
        <UserPost />
        <UserPost />
      </div>
    </section>
  );
}
