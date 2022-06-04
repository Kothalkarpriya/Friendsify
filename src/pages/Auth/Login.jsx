import React from "react";
import "../../assests/styles/auth.css";
import "../../assests/styles/leftsidebar.css";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/context";

export default function Login() {
  const [user, setUser] = useState({
    username: "priyakothalkar@gmail.com",
    password: "priya123",
  });

  const { login } = useAuth();

  const changeInputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    login(user);
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
              // eslint-disable-next-line no-undef
              value={user.username}
              // eslint-disable-next-line no-undef
              onChange={(e) => changeInputHandler(e, username)}
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
              // eslint-disable-next-line no-undef
              value={user.password}
              // eslint-disable-next-line no-undef
              onChange={(e) => changeInputHandler(e, password)}
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
            <button className="btn btn-left" type="submit">
              Login
            </button>
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
