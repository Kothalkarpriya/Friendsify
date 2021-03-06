import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { followUser } from "../../redux/asynTunk/usersThunk";

export default function FollowerSuggestionsProfile({
  user: { _id, username, firstName, lastName, profilePic },
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const followUserHandler = async (userId, token) => {
    dispatch(followUser({ userId, token, dispatch }));
  };
  return (
    <section className="userlist-container">
      <div className="first">
        <img
          className="avatar-image round-image"
          alt="profile"
          src={profilePic}
          onClick={() => navigate(`/profile/${username}`)}
        />
        <div className="username-block">
          <p className="user-name">
            {firstName}
            {lastName}
          </p>

          <p className="user-name bl-user">@{username}</p>
        </div>
      </div>

      <button
        className="btn btn-left"
        onClick={() => followUserHandler(_id, token)}
      >
        Follow
      </button>
    </section>
  );
}
