import "../../assests/styles/leftsidebar.css";
import { Link } from "react-router-dom";
import {
  MdHome,
  MdExplore,
  MdOutlineBookmark,
  MdNotificationsActive,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useAuth } from "../../context/context";
import { NavLink } from "react-router-dom";

export default function LeftSideBar() {
  const { authState, logout } = useAuth();
  const { isLoggedIn } = authState;
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
        <Link to="notification" className="link">
          <MdNotificationsActive className="icon" />
          Notifications
        </Link>
        <Link to="/profile" className="link">
          <CgProfile className="icon" />
          Profile
        </Link>
      </div>
      <div className="left-side-second">
        {isLoggedIn ? (
          <NavLink to="/">
            <button className="btn-left btn" onClick={() => logout()}>
              Logout
            </button>
          </NavLink>
        ) : (
          <NavLink to="/login">
            <button className="btn-left btn">Login</button>
          </NavLink>
        )}
      </div>
    </section>
  );
}
