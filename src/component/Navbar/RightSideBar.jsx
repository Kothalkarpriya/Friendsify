import "../../assests/styles/rightsidebar.css";
import { FollowerSuggestion } from "../component";

export default function RightSideBar() {
  return (
    <aside className="right-side-container">
      <div className="right-side-second">
        <div className="side-head">
          <p>Who to Follow?</p>
        </div>
        <FollowerSuggestion />
      </div>
    </aside>
  );
}
