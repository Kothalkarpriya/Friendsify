import "../../assests/styles/post-filter.css";
import { NEW_FIRST, OLD_FIRST } from "../../backend/utils/variables";

export default function PostFilter({
  trending,
  setTrending,
  sortBy,
  setSortBy,
}) {
  return (
    <section className="post-filter-container">
      <ul>
        <li
          onClick={(e) => {
            setSortBy(e.target.value);
            setTrending(false);
          }}
        >
          <button value={`${OLD_FIRST}`}>Oldest</button>
        </li>
        <li
          onClick={() => {
            setSortBy("");
            setTrending((prev) => !prev);
          }}
        >
          <button value={`${NEW_FIRST}`}>Trending </button>
        </li>
        <li
          onClick={() => {
            setSortBy();
            setTrending(true);
          }}
        >
          <button>Recent</button>
        </li>
      </ul>
    </section>
  );
}
