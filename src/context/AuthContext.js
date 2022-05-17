import axios from "axios";

import { createContext, useContext, useReducer, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthReducer from "../reducer/AuthReducer";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [authState, authDispatch] = useReducer(AuthReducer, {
    isLoggedIn: false,
    token: null,
  });
  const { isLoggedIn } = authState;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathName || "/home";

  const login = async (user) => {
    try {
      const { data } = await axios.post("/api/auth/login", {...user
      });
      localStorage.setItem("user", JSON.stringify(data));
      authDispatch({ type: "LOGIN", payload: data });
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const signin = async (user) => {
    try {
      const { data } = await axios.post("/api/auth/signup", user);
      localStorage.setItem("user", JSON.stringify(data));
      authDispatch({ type: "SIGNIN", payload: data });
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async (user) => {
    try {
      localStorage.removeItem("user");
      authDispatch({ type: "LOGOUT" });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    data && authDispatch({ type: "LOGIN", payload: data });
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, signin, logout, authState, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthContextProvider, useAuth };
