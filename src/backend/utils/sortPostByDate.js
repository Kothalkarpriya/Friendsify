import { OLD_FIRST, NEW_FIRST } from "./variables";

const sortPostByDate = (posts, sortBy) => {
  switch (sortBy) {
    case OLD_FIRST:
      return [...posts].sort(
        (postOne, postTwo) =>
          new Date(postOne.createdAt).getTime() -
          new Date(postTwo.createdAt).getTime()
      );
    case NEW_FIRST:
      return [...posts].sort(
        (postOne, postTwo) =>
          new Date(postTwo.createdAt).getTime() -
          new Date(postOne.createdAt).getTime()
      );
    default:
      return posts;
  }
};

export { sortPostByDate };
