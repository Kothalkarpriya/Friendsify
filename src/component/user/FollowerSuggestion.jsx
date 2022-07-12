import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../../redux/asynTunk/usersThunk";
import FollowerSuggestionsProfile from "./FollowerSuggestionProfile";
import { useState } from "react";

export default function FollowerSuggestion() {
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [list, setList] = useState([]);

  useEffect(() => {
    setList(
      users.filter(
        (item) =>
          item._id !== user._id &&
          !user.following.some((user) => user._id === item._id)
      )
    );
  }, [users, user]);

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      {list?.length
        ? list.map((userItem) => (
            <FollowerSuggestionsProfile user={userItem} key={userItem.id} />
          ))
        : null}
    </section>
  );
}
