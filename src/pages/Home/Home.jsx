import { CreatePost, UserPost } from "../../component/component";
import "../../assests/styles/navbar.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/asynTunk/postsThunk";

export default function Home() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  let homeUsers = user.following
    ? user.following.map((user) => user.username)
    : null;

  homeUsers = [...homeUsers, user.username];

  const homePosts = posts.filter((post) => homeUsers.includes(post.username));
  return (
    <main className="home">
      <CreatePost />
      <h2 className="text-align-center heading">Latest Post</h2>
      {homePosts.length ? (
        homePosts.map((post) => <UserPost key={post._id} post={post} />)
      ) : (
        <p>There are no posts to display</p>
      )}
    </main>
  );
}
