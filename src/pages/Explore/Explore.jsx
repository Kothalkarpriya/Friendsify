import { PostFilter, UserPost } from "../../component/component";
import "../../assests/styles/post-filter.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/asynTunk/postsThunk";

export default function Explore() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <main className="post-filter">
      <h2 className="heading text-align-left">Explore</h2>
      <PostFilter />
      {posts.length ? (
        posts.map((post) => <UserPost key={post._id} post={post} />)
      ) : (
        <h2>No posts to show</h2>
      )}
    </main>
  );
}
