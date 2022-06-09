import { CreatePost, UserPost } from "../../component/component";
import "../../assests/styles/navbar.css";

export default function Home() {
  return (
    <main className="home">
      <CreatePost />
      <h2 className="text-align-center heading">Latest Post</h2>
      {/* <UserPost /> */}
    </main>
  );
}
