import "../../assests/styles/post-css.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "../../redux/asynTunk/authTunk";
import { updateUser } from "../../redux/slices/authSlice";

export default function EditProfile({ userProfile, modalDisplay }) {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [modal, setModal] = useState(modalDisplay);

  const reader = new FileReader();

  const [userData, setUserData] = useState({ ...userProfile, profileFile: "" });

  const inputChangeHandler = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updateProfileImageHandler = (e) => {
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserData({
          ...userData,
          profilePic: reader.result,
          profileFile: e.target.files[0],
        });
      } else {
        reader.abort();
        setUserData({
          ...userData,
          profilePic: "",
          profileFile: "",
        });
      }
    };
  };

  const updateModifiedData = async () => {
    try {
      const response = await dispatch(editUser({ userData, token }));
      if (response.payload.status === 201) {
        setUserData(response.payload.data.user);
        dispatch(updateUser(response?.payload.data.user));
        console.log("Profile updated successfully!!!");
      } else {
        console.log(`${response?.payload?.data?.errors[0]}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeClickHandler = () => {
    setModal((modal) => !modal);
    setUserData(() => userProfile);
  };
  return (
    <section
      className={`${
        modal ? "modal-display-wrap" : "display-none"
      } && single-post`}
    >
      <h2>Editing Profile</h2>
      <article className="playlist-modal">
        <div className="image">
          <img
            name={userProfile.firstName + " " + userProfile.lastName}
            src={userData?.profilePic || userProfile.profilePic}
            alt="user profile"
            className="avatar-image round-image text-align-center"
          />
          <input
            type="file"
            accept="image/*"
            onChange={updateProfileImageHandler}
          />
        </div>
        <textarea
          placeholder="Passionate builder"
          className="bio"
          value={userData?.bio}
          onChange={inputChangeHandler}
          name="bio"
        />
        <input
          className="portfolio"
          value={userData?.portfolio}
          onChange={inputChangeHandler}
          name="portfolio"
          placeholder="https://portfolio.com"
          type="text"
        />
        <div className="btn-container">
          <button className="btn btn-left" onClick={closeClickHandler}>
            Close
          </button>
          <button className="btn btn-left" onClick={updateModifiedData}>
            Save
          </button>
        </div>
      </article>
    </section>
  );
}
