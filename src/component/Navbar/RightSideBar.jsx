import "../../assests/styles/rightsidebar.css";
import { AiOutlineSearch } from "react-icons/ai";
import {UserList} from "../component.js";

export default function RightSideBar() {
  return (
    <aside className="right-side-container">
      <div className="right-side-first">
        <AiOutlineSearch className="icon" />
        <input
          type="search"
          className="search"
          placeholder="Search Posts, People ,anything"
        />
      </div>
      <div className="right-side-second">
        <div className="side-head">
          <p>Who to Follow?</p>
          <button>Show More</button>
        </div>
        <UserList />
        <UserList />
        <UserList />
        <UserList />
      </div>
    </aside>
  );
}
