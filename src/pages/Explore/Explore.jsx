import { PostFilter, UserPost } from "../../component/component";
import "../../assests/styles/post-filter.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/asynTunk/postsThunk";
import { sortPostByTrending } from "../../backend/utils/sortPostByTrending";
import { sortPostByDate } from "../../backend/utils/sortPostByDate";

export default function Explore() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  const [trending, setTrending] = useState(false);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const trendingFilteredPosts = sortPostByTrending(posts, trending);

  const dateFilteredPosts = sortPostByDate(trendingFilteredPosts, sortBy);

  return (
    <main className="post-filter">
      <h2 className="heading text-align-left">Explore</h2>
      <PostFilter
        trending={trending}
        setTrending={setTrending}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      {dateFilteredPosts.length ? (
        dateFilteredPosts.map((post) => <UserPost key={post._id} post={post} />)
      ) : (
        <h2>No posts to show</h2>
      )}
    </main>
  );
}
