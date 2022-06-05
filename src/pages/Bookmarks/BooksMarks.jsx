import { UserPost } from "../../component/component";
import "../../assests/styles/post-filter.css";

export default function BookMarks() {
  return (
    <main className="bookmark">
      <h2 className="heading text-align-left">Your Bookmarks</h2>
      <UserPost />
      <UserPost />
    </main>
  );
}
