import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "3d20c971-c103-4793-972e-ef635cd5b3am",
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
    following: [
      {
        _id: "3e9d4b61-21b2-429e-ae76-8ac78dd6dcpk",
        firstName: "Priya",
        lastName: "Kothalkar",
        username: "priyakothalkar@gmail.com",
        profilePic:
          "https://ik.imagekit.io/priyakothalkar/IMG20200226121916_LZ8pOBhKt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654764001154",
      },
      {
        _id: "758567dc-73d2-48d8-a469-f47f8f7af485",
        firstName: "Nutan",
        lastName: "Bhoyar",
        username: "nutanbhoyar@gmail.com",
        profilePic:
          "https://ik.imagekit.io/priyakothalkar/IMG_20210212_225819_mPV-zMT8E.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1654764040768",
      },
    ],
  },
  {
    _id: "0ad4d0e8-c66e-464a-9a26-c56e40eb087b",
    firstName: "Priya",
    lastName: "Kothalkar",
    username: "priyakothalkar@gmail.com",
    profilePic:
      "https://ik.imagekit.io/priyakothalkar/IMG20200226121916_LZ8pOBhKt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654764001154",
    password: "priya123",
    bio: "Full stack developer enthusiast",
    portfolio: "https://priya-kothalkar.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: "71504065-167b-4866-a6ae-cc6b61837a9a",
        firstName: "Dipali",
        lastName: "Kharat",
        username: "dipalikharat@gmail.com",
        profilePic:
          "https://ik.imagekit.io/priyakothalkar/IMG_20191224_190139_h5wXS5x_4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654763824671",
      },
      {
        _id: "758567dc-73d2-48d8-a469-f47f8f7af485",
        firstName: "Nutan",
        lastName: "Bhoyar",
        username: "nutanbhoyar@gmail.com",
        profilePic:
          "https://ik.imagekit.io/priyakothalkar/IMG_20210212_225819_mPV-zMT8E.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1654764040768",
      },
    ],
  },
  {
    _id: "4b057a61-e1e5-438c-ba64-bb311d165285",
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
    following: [
      {
        _id: "43b7f04d-7763-407f-b917-94d6997c0e1a",
        firstName: "Priya",
        lastName: "Kothalkar",
        username: "priyakothalkar@gmail.com",
        profilePic:
          "https://ik.imagekit.io/priyakothalkar/IMG20200226121916_LZ8pOBhKt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654764001154",
      },
      {
        _id: "758567dc-73d2-48d8-a469-f47f8f7af485",
        firstName: "Nutan",
        lastName: "Bhoyar",
        username: "nutanbhoyar@gmail.com",
        profilePic:
          "https://ik.imagekit.io/priyakothalkar/IMG_20210212_225819_mPV-zMT8E.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1654764040768",
      },
    ],
  },
  {
    _id: "bc881279-f184-46f9-b951-3f17596c22ff",
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
    following: [
      {
        _id: "68122852-2476-45a4-906a-72045487acd3",
        firstName: "Priya",
        lastName: "Kothalkar",
        username: "priyakothalkar@gmail.com",
        profilePic:
          "https://ik.imagekit.io/priyakothalkar/IMG20200226121916_LZ8pOBhKt.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654764001154",
      },
      {
        _id: "758567dc-73d2-48d8-a469-f47f8f7af485",
        firstName: "Nutan",
        lastName: "Bhoyar",
        username: "nutanbhoyar@gmail.com",
        profilePic:
          "https://ik.imagekit.io/priyakothalkar/IMG_20210212_225819_mPV-zMT8E.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1654764040768",
      },
    ],
  },
  {
    _id: "58b9636f-19f5-4f73-bace-0cb8b85f8bf9",
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
    following: [
      {
        _id: "9d1a9942-0b15-4ca8-a0ed-8da1e4fbfe67",
        firstName: "Dipali",
        lastName: "Kharat",
        username: "dipalikharat@gmail.com",
        profilePic:
          "https://ik.imagekit.io/priyakothalkar/IMG_20191224_190139_h5wXS5x_4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1654763824671",
      },
      {
        _id: "758567dc-73d2-48d8-a469-f47f8f7af485",
        firstName: "Nutan",
        lastName: "Bhoyar",
        username: "nutanbhoyar@gmail.com",
        profilePic:
          "https://ik.imagekit.io/priyakothalkar/IMG_20210212_225819_mPV-zMT8E.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1654764040768",
      },
    ],
  },
];
