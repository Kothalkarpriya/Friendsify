import "../../assests/styles/profile.css";
import "../../assests/styles/userlist.css";
import EditProfile from "./EditProfile";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unfollowUser } from "../../redux/asynTunk/usersThunk";

export default function ProfileCard({
  profileDetails,
  numberOfPosts,
}) {
  const dispatch = useDispatch();
  const [modalDisplay, setModalDisplay] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const { username, following, followers } = profileDetails;

  const isCurrentLoggedInUser = username === user.username;

  const followUserHandler = async () => {
    dispatchEvent(followUser({ userId: __dirname, token }));
  };

  const unfollowUserHandler = async () => {
    dispatch(unfollowUser({ userId: __dirname, token }));
  };

  return (
    <>
      {modalDisplay && <EditProfile modalDisplay userProfile={user} />}
      <section className="profile-container">
        <div className="image">
          <img
            src={user.profilePic}
            alt="user profile"
            className="avatar-image round-image text-align-center"
          />
        </div>
        <p className="user-name">
          {user.firstName}
          {user.lastName}
        </p>
        <p className="user-name">@{user.username}</p>
        {!isCurrentLoggedInUser &&
        user.following.some(
          (userFollow) => userFollow.username === username
        ) ? (
          <button className="btn btn-left" onClick={unfollowUserHandler}>
            Unfollow
          </button>
        ) : (
          !isCurrentLoggedInUser && (
            <button className="btn btn-left" onClick={followUserHandler}>
              Follow
            </button>
          )
        )}
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

        <p className="bio text-align-center">{user.bio}</p>
        <p className="portfolio">{user.portfolio}</p>

        <div className="profile-data">
          <div className="follower-container">
            <span className="follower">
              <p className="count">{followers?.length}</p>
              <p className="follower-detail">Followers</p>
            </span>
            <span className="follower">
              <p className="count">{numberOfPosts}</p>
              <p className="follower-detail">Posts</p>
            </span>
            <span className="follower">
              <p className="count">{following?.length}</p>
              <p className="follower-detail">Following</p>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
