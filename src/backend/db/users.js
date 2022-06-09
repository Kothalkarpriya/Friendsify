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
    bio: "Food And Beverage Supervisor",
    portfolio: "https://www.linkedin.com/in/pawankothalkar/",
    profilePic:
      "https://ik.imagekit.io/priyakothalkar/IMG20200226114233_n5OUY3utd.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654764001284",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Priya",
    lastName: "Kothalkar",
    username: "priyakothalkar@gmail.com",
    profilePic:
      "https://ik.imagekit.io/priyakothalkar/IMG20200226121916_LZ8pOBhKt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654764001154",
    password: "priya123",
    bio: "Full stack developer enthusiast",
    portfolio: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Nutan",
    lastName: "Bhoyar",
    username: "nutanbhoyar@gmail.com",
    profilePic:
      "https://ik.imagekit.io/priyakothalkar/IMG_20210212_225819_mPV-zMT8E.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1654764040768",
    password: "nutan123",
    bio: "Application Developer Intern",
    portfolio: "https://www.linkedin.com/in/nutan-bhoyar-52746a190/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Dipali",
    lastName: "Kharat",
    username: "dipalikharat@gmail.com",
    profilePic:
      "https://ik.imagekit.io/priyakothalkar/IMG_20191224_190139_h5wXS5x_4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654763824671",
    password: "dipali123",
    bio: "Student at Deogiri Institute of Engineering and Management Studies, Aurangabad",
    portfolio: "https://www.linkedin.com/in/dipali-kharat-1489831a1/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shubhangi",
    lastName: "Hiwale",
    username: "shubhangihiwale@gmail.com",
    profilePic:
      "https://ik.imagekit.io/priyakothalkar/IMG-20201123-WA0013_tRik1ZMWy.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654764076938",
    password: "shubhi123",
    bio: "Intershala student partner ",
    portfolio: "https://www.linkedin.com/in/shubhangi-hiwale-262468190/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
