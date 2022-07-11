import "../../assests/styles/leftsidebar.css";
import { Link, NavLink } from "react-router-dom";
import { MdHome, MdExplore, MdOutlineBookmark } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

export default function LeftSideBar() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <section className="left-side-container">
      <div className="left-side-first">
        <Link to="home" className="link">
          <MdHome className="icon" />
          Home
        </Link>
        <Link to="explore" className="link">
          <MdExplore className="icon" />
          Explore
        </Link>
        <Link to="/bookmarks" className="link">
          <MdOutlineBookmark className="icon" />
          BookMarks
        </Link>
        <Link to="/profile" className="link">
          <CgProfile className="icon" />
          Profile
        </Link>
        {token || localStorage.getItem("token") ? (
          <NavLink to="/" className="link">
            <button className="btn-left btn" onClick={logoutHandler}>
              Logout
            </button>
          </NavLink>
        ) : (
          <NavLink to="/login" className="link">
            <button className="btn-left btn">Login</button>
          </NavLink>
        )}
      </div>
    </section>
  );
}
