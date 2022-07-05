import "../../assests/styles/profile.css";
import "../../assests/styles/userlist.css";
import { UserPost, ProfileCard } from "../../component/component";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/asynTunk/postsThunk";

export default function Profile() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const currentLoggedInUserPosts = [...posts].filter(
    (post) => user.username === post.username
  );

  return (
    <main className="profile-main">
      <article className="z-index">
        <ProfileCard
          profileDetails={user}
          numberOfPosts={currentLoggedInUserPosts.length}
        />
      </article>

      <section className="profile-container">
        <div className="posts">
          <h2 className="heading">Your Posts </h2>
          {currentLoggedInUserPosts.length > 0 ? (
            [...currentLoggedInUserPosts]
              ?.reverse()
              .map((post) => <UserPost key={post._id} post={post} />)
          ) : (
            <h2>Post Something NOW !!!</h2>
          )}
        </div>
      </section>
    </main>
  );
}
