import "../../assests/styles/auth.css";
import "../../assests/styles/leftsidebar.css";
import { AiOutlineRight } from "react-icons/ai";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { login } from "../../redux/asynTunk/authTunk";
import { useDispatch } from "react-redux";

export default function Login() {
  const [user, setUser] = useState({
    username: "priyakothalkar@gmail.com",
    password: "priya123",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const changeInputHandler = (e) => {
    setUser((user) => ({ ...user, [e.target.name]: e.target.value }));
  };
  // const guestUser = {
  //   username: "priya@gmail.com",
  //   password: "priya123",
  // };

  // const guestUserHandler = (e) => {
  //   e.preventDefault();
  //   setUser(guestUser);
  // };

  const submit = async (e) => {
    e.preventDefault();
    if (user.username && user.password) {
      const response = await dispatch(login(user));
      if (response?.payload?.status === 200) {
        localStorage.setItem(
          "user",
          JSON.stringify(response?.payload.data.foundUser)
        );
        localStorage.setItem("token", response?.payload.data.encodedToken);
        navigate(location?.state?.from?.pathname || "/home", {
          replace: true,
        });
      } else {
        console.log("Something went wrong");
      }
    }
  };
  return (
    <main className="landing-main">
      <h1>
        <span>Friend</span>sify
      </h1>
      <section className="login">
        <header>Login</header>
        <form action="#" onSubmit={submit}>
          <div className="form-block">
            <label className="label" htmlFor="#input-email">
              Email Address
            </label>
            <input
              id="input-email"
              type="email"
              placeholder="username@gmail.com"
              required
              name="email"
              value={user.username}
              // eslint-disable-next-line no-undef
              onChange={(e) => changeInputHandler(e,username)}
            />
          </div>
          <div className="form-block">
            <label className="label" htmlFor="#input-pass">
              Password
            </label>
            <input
              type="password"
              id="input-pass"
              placeholder="**********"
              required
              name="password"
              value={user.password}
              // eslint-disable-next-line no-undef
              onChange={(e)=>changeInputHandler(e,password)}
            />
          </div>
          <div className="form-block-check">
            <div className="input">
              <input type="checkbox" required />
              Remember Me
            </div>
            <div className="btn-pass">
              <Link className="Link" to="/home">
                Forgot your Password?
              </Link>
            </div>
          </div>
          <div className="form-block">
            <button
              className="btn btn-left"             
              type="submit"
            >
              Login
            </button>
            {/* <button className="btn btn-left" onClick={() => guestUserHandler}>
              Guest Login
            </button> */}
          </div>
        </form>
        <div className="form-block">
          <Link className="Link" to="/signin">
            Create New Account <AiOutlineRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
