// import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "25014fb6-fd83-4e0d-9222-f52e02b25793",
    content:
      "I Am Pavan Kothalkar, a Butler at Vivanta Taj, Pune. I live in Pune. I am from Aurangabad, Maharashtra, India.",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Pavan",
    lastName: "Kothalkar",
    username: "pavankothalkar",
    createdAt: new Date("26/02/2022"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "060015f6-e8b8-4a80-b5df-39c6b9998a75",
        username: "nutanbhoyar",
        commentData: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: "3950532c-c626-41b9-a298-fd7e6d74e1ab",
    content:
      "I am Priya kothalkar a passionate learner. I am from Aurangabad. I am learning to become full stack developer. Right now I am doing an internship and learning from neogcamp",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Priya",
    lastName: "Kothalkar",
    username: "priyakothalkar",
    createdAt: new Date("14/04/2022"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "4f3b3148-1625-4949-982a-9eec5f38846e",
        username: "nutanbhoyar",
        commentData: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: "a8e607b5-3ce6-43cb-8e87-2d0b42d6e89d",
    content:
      "I am Nutan Bhoyar. I am from Vashim. I am doing an internship and wanted to become an IAS officer.",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Nutan",
    lastName: "Bhoyar",
    username: "nutanbhoyar",
    createdAt: new Date("04/12/2021"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "3636d90e-0a7d-42a3-969e-49ed3513ff72",
        username: "nutanbhoyar",
        commentData: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: "ebdd43c5-3949-4308-8283-86a5403b7078",
    content:
      "I am Dipali kharat. I am from Devulgav, Jalna. I am doing an training at college of capgemini and practising questions to get a good job.",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Dipali",
    lastName: "Kharat",
    username: "dipalikharat",
    createdAt: new Date("29/05/22"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "ec7978dd-46d7-46d1-8835-1ee4cdeb942c",
        username: "nutanbhoyar",
        commentData: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: "33d51208-3ef5-47ea-b255-53ef4b0e332a",
    content:
      "I am Shubhangi Hiwale. I am from Jalna. I am doing an internship at YBI and practising questions to get a good job.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Shubhangi",
    lastName: "Hiwale",
    username: "shubhangihiwale",
    createdAt: new Date("09/06/2022"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "5b551783-7aea-4543-b508-8f7f41ed1695",
        username: "nutanbhoyar",
        commentData: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
