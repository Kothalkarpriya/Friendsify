import "../../assests/styles/profile.css";
import "../../assests/styles/userlist.css";
import EditProfile from "./EditProfile";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function ProfileCard({ profileDetails, numberOfPosts }) {
  const [modalDisplay, setModalDisplay] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const {
    username,
    firstName,
    lastName,
    profilePic,
    bio,
    portfolio,
    following,
    followers,
  } = profileDetails;

  return (
    <>
      {modalDisplay && <EditProfile modalDisplay userProfile={user} />}
      <section className="profile-container">
        <div className="image">
          <img
            src={profilePic}
            alt="user profile"
            className="avatar-image round-image text-align-center"
          />
        </div>
        <p className="user-name">
          {firstName}
          {lastName}
        </p>
        <p className="user-name">{username}</p>
        <div className="btn-container">
          <button
            className="btn btn-left"
            onClick={() => {
              if (modalDisplay === true) {
                setModalDisplay(false);
              } else {
                setModalDisplay(true);
              }
            }}
          >
            Edit Profile
          </button>
        </div>

        <p className="bio text-align-center">{bio}</p>
        <p className="portfolio">{portfolio}</p>

        <div className="profile-data">
          <div className="follower-container">
            <span className="follower">
              <p className="count">{followers.length}</p>
              <p className="follower-detail">Following</p>
            </span>
            <span className="follower">
              <p className="count">{numberOfPosts}</p>
              <p className="follower-detail">Posts</p>
            </span>
            <span className="follower">
              <p className="count">{following.length}</p>
              <p className="follower-detail">Following</p>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
