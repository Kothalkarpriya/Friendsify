import { CreatePost, UserPost } from "../../component/component";

export default function Home() {
  return (
    <main>
      <CreatePost />
      <h2 className="text-align-left heading">Latest Post</h2>
      <UserPost />
      {/* <UserPost />
      <UserPost />
      <UserPost /> */}
    </main>
  );
}
