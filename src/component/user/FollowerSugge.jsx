import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../../redux/asynTunk/usersThunk";

import FollowerSuggestionsProfile from "./FollowerSuggestionProfile";

export default function FollowerSugge() {
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const usersNotFollowedByLoggedInUser = users.filter(
    (item) =>
      item.username !== user.username &&
      !user.following.some((user) => user.username === item.username)
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <section>
      {usersNotFollowedByLoggedInUser?.length
        ? usersNotFollowedByLoggedInUser.map((userSuggestion) => (
            <FollowerSuggestionsProfile user={userSuggestion} />
          ))
        : null}
    </section>
  );
}
