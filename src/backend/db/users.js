import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Pavan",
    lastName: "Kothalkar",
    username: "pavankothalkar@gmail.com",
    password: "pavan123",
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
  {
    _id: uuid(),
    firstName: "Nutan",
    lastName: "Bhoyar",
    username: "nutanbhoyar@gmail.com",
    password: "nutan123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Dipali",
    lastName: "Kharat",
    username: "dipalikharat@gmail.com",
    password: "dipali123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shubhangi",
    lastName: "Hiwale",
    username: "shubhangihiwale@gmail.com",
    password: "shubhi123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }

];
