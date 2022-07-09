/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { followUser } from "../../redux/asynTunk/usersThunk";
import { updateUser } from "../../redux/slices/authSlice";

export default function FollowerSuggestionsProfile({
  user: { _id, username, firstName, lastName, profilePic },
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const followUserHandler = async (userId, token) => {
    dispatch(followUser({ userId, token , dispatch}));
    // dispatch(updateUser());
    // if (response.payload.status === 200) {
    //   dispatch(updateUser(response.payload.data?.user));
    // } else {
    //   console.log(response.payload.data.errors[0]);
    // }
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
        <p className="user-name">
          {firstName}
          {lastName}
        </p>

        {/* <p className="user-name">@{username}</p> */}
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
