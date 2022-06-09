import { useDispatch } from "react-redux";
import { reactionAdded } from "../../redux/slices/postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  heart: "❤️",
};

export function ReactionBtn({ post }) {
  const dispatch = useDispatch();
  const reactionBtns = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
        className="icon"
      >
        {emoji}
        {post.reactions[name]}
      </button>
    );
  });
  return <>{reactionBtns}</>;
}
