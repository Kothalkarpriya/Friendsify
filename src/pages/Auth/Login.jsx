import React from "react";
import "../../assests/styles/auth.css";
import "../../assests/styles/leftsidebar.css";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main>
      <section className="login">
        <header>Login</header>
        <form>
          <div className="form-block">
            <label className="label" for="#input-email">
              Email Address
            </label>
            <input id="input-email" type="email" placeholder="username@gmail.com" required/>
          </div>
          <div className="form-block">
            <label className="label" for="#input-pass">
              Password
            </label>
            <input type="password" id="input-pass" placeholder="**********" required/>
          </div>
          <div className="form-block-check">
            <div className="input">
              <input type="checkbox" required/>
              Remember Me
            </div>
            <div className="btn-pass">
              <Link className="Link" to="/">Forgot your Password?</Link>
            </div>
          </div>
          <div className="form-block">
            <button className="btn btn-left">Login</button>
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
