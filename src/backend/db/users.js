import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika@gmail.com",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Priya",
    lastName: "Kothalkar",
    username: "priyakothalkar@gmail.com",
    password: "priya123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
