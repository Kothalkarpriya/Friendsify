import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "I Am Pavan Kothalkar, a Butler at Vivanta Taj, Pune. I live in Pune. I am from Aurangabad, Maharashtra, India.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Pavan",
    lastName: "Kothalkar",
    username: "pavankothalkar@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "I am Priya kothalkar a passionate learner. I am from Aurangabad. I am learning to become full stack developer. Right now I am doing an internship and learning from neogcamp",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Priya",
    lastName: "Kothalkar",
    username: "priyakothalkar@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "I am Nutan Bhoyar. I am from Vashim. I am doing an internship and wanted to become an IAS officer.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Nutan",
    lastName: "Bhoyar",
    username: "nutanbhoyar@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "I am Dipali kharat. I am from Devulgav, Jalna. I am doing an training at college of capgemini and practising questions to get a good job.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Dipali",
    lastName: "Kharat",
    username: "dipalikharat@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "I am Shubhangi Hiwale. I am from Jalna. I am doing an internship at YBI and practising questions to get a good job.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Shubhangi",
    lastName: "Hiwale",
    username: "shubhangihiwale@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
