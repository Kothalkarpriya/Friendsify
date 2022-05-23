import React from "react";
import "../../assests/styles/auth.css";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { useState } from "react";
import { useAuth } from "../../context/context";

export default function SignIn() {
  const [user, setUser] = useState({});
  const { signin } = useAuth();

  const changeInputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    signin(user);
  };
  return (
    <main className="land">
      <h1>
        <span>Friend</span>sify
      </h1>
      <section className="signin">
        <header>Signup</header>
        <form action="#" onSubmit={submit}>
          <div className="form-block-name">
            <div className="form-block">
              <label className="label" for="#input-firstName">
                First Name
              </label>
              <input
                type="text"
                id="input-firstName"
                placeholder="First Name"
                required
                onChange={(e) => changeInputHandler(e)}
              />
            </div>
            <div className="form-block">
              <label className="label" for="#input-lastName">
                Last Name
              </label>
              <input
                type="text"
                id="input-lastName"
                placeholder="Last Name"
                required
                onChange={(e) => changeInputHandler(e)}
              />
            </div>
          </div>
          <div className="form-block">
            <label className="label" for="#input-email">
              Email Address
            </label>
            <input
              id="input-email"
              type="email"
              placeholder="username@gmail.com"
              required
              onChange={(e) => changeInputHandler(e)}
            />
          </div>
          <div className="form-block">
            <label className="label" for="#input-pass">
              Password
            </label>
            <input
              type="password"
              id="input-pass"
              placeholder="**********"
              required
              onChange={(e) => changeInputHandler(e)}
            />
          </div>
          <div className="form-block">
            <label className="label" for="#input-pass-again">
              Confirm Password
            </label>
            <input
              type="password"
              id="input-pass-again"
              placeholder="**********"
              required
            />
          </div>
          <div className="form-block-check">
            <div className="input">
              <input type="checkbox" required />
              Show Password
            </div>
            <div className="input">
              <input type="checkbox" required />I accept to Signin
            </div>
          </div>
          <div className="form-block">
            <button className="btn btn-left">Login</button>
          </div>
        </form>
        <div className="form-block">
          <Link className="Link" to="/login">
            Already have an Account <AiOutlineRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
