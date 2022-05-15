import "../../assests/styles/auth.css";
import "../../assests/styles/leftsidebar.css";
import { AiOutlineRight } from "react-icons/ai";

export default function Login() {
  return (
    <main>
      <form>
        <header>Login</header>
        <div className="form-block">
          <lable className="label">
            Email Address
            <input placeholder="username@gmail.com" />
          </lable>
        </div>
        <div className="form-block">
          <label className="label">
            Password
            <input type="password" placeholder="**********" />
          </label>
        </div>
        <div className="form-block">
          <label className="label">
            <input type="checkbox" />
            Remember Me
          </label>
          <button>Forgot your Password?</button>
        </div>
        <button className="btn btn-left">Login</button>
        <button>
          Create New Account <AiOutlineRight />
        </button>
      </form>
    </main>
  );
}
