import { PostFilter, UserPost } from "../../component/component";
import "../../assests/styles/post-filter.css";

export default function Explore() {
  return (
    <main className="post-filter">
      <h2 className="heading text-align-left">Explore</h2>
      <PostFilter />
      <UserPost />
      <UserPost />
      <UserPost />
    </main>
  );
}
