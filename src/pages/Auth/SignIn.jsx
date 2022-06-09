import "../../assests/styles/auth.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { useState } from "react";
import { signup } from "../../redux/asynTunk/authTunk";
import { useDispatch } from "react-redux";

export default function SignIn() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmpassword: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  // const { signup } = useAuth();

  const changeInputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validateInput = () => {
    return (
      user.username &&
      user.firstName &&
      user.lastName &&
      user.password &&
      user.confirmpassword
    );
  };

  const submit = async (e) => {
    if (validateInput()) {
      if (user.password === user.confirmpassword) {
        const response = await dispatch(signup(user));
        if (response?.payload?.status === 201) {
          localStorage.setItem(
            "user",
            JSON.stringify(response.payload.data.createdUser)
          );
          localStorage.setItem("token", response.payload.data.encodedToken);
          navigate(location?.state?.from?.pathname || "/home", {
            replace: true,
          });
        } else {
          console.log("Something went wrong");
        }
      } else {
        console.log("Passwords do not match");
      }
    } else {
      console.log("Enter all the details");
    }
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
              <label className="label" htmlFor="#input-firstName">
                First Name
              </label>
              <input
                type="text"
                id="input-firstName"
                placeholder="First Name"
                required
                value={user.firstName}
                onChange={(e) => changeInputHandler(e)}
              />
            </div>
            <div className="form-block">
              <label className="label" htmlFor="#input-lastName">
                Last Name
              </label>
              <input
                type="text"
                id="input-lastName"
                placeholder="Last Name"
                required
                value={user.lastName}
                onChange={(e) => changeInputHandler(e)}
              />
            </div>
          </div>
          <div className="form-block">
            <label className="label" htmlFor="#input-email">
              Email Address
            </label>
            <input
              id="input-email"
              type="email"
              placeholder="username@gmail.com"
              required
              value={user.username}
              onChange={(e) => changeInputHandler(e)}
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
              value={user.password}
              onChange={(e) => changeInputHandler(e)}
            />
          </div>
          <div className="form-block">
            <label className="label" htmlFor="#input-pass-again">
              Confirm Password
            </label>
            <input
              type="password"
              id="input-pass-again"
              placeholder="**********"
              required
              value={user.confirmpassword}
              onChange={(e) => changeInputHandler(e)}
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
            <button className="btn btn-left" type="submit">
              Signup
            </button>
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
