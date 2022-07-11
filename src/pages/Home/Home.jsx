import { CreatePost, UserPost } from "../../component/component";
import "../../assests/styles/navbar.css";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/asynTunk/postsThunk";

export default function Home() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  let homeUsers = user?.following
    ? user?.following.map((user) => user.username)
    : null;

  homeUsers = [...homeUsers, user.username];
  const homePosts = posts?.filter((post) => homeUsers.includes(post.username));
  const latestHomePosts = [...homePosts].reverse();
  return (
    <>
      <main className="home">
        <CreatePost key={uuid()} />
        <h2 className="text-align-center heading">Latest Post</h2>
        {latestHomePosts.length ? (
          latestHomePosts.map((post) => <UserPost key={post.id} post={post} />)
        ) : (
          <p>There are no posts to display</p>
        )}
      </main>
    </>
  );
}
