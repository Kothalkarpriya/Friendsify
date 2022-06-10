import axios from "axios";

const getUser = async (setUserProfile, username) => {
  try {
    const response = await axios.get(`/api/users/${username}`);
    setUserProfile(response.data.user);
  } catch (error) {
   console.log(error);
  }
};

export { getUser };