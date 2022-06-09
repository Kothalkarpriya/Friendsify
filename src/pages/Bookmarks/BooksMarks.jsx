import { UserPost } from "../../component/component";
import "../../assests/styles/post-filter.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBookmarksForAuthUser } from "../../redux/asynTunk/usersThunk";

export default function BookMarks() {
  const { token, bookmarks } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarksForAuthUser(token));
  }, [dispatch, token]);
  return (
    <main className="bookmark">
      <h2 className="heading text-align-left">Your Bookmarks</h2>
      {bookmarks?.length !==0 ? (
        bookmarks.map((post) => <UserPost post={post} key={post._id} />)
      ) : (
        <h2>No Bookmarked posts available</h2>
      )}
    </main>
  );
}
