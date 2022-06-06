import { Link } from "react-router-dom";
import img from "../../assests/home-image/landing.jpg";
import "../../assests/styles/landing-page.css";

export default function LandingPage() {
  return (
    <main className="landing-main">
      <section className="landing">
        <article>
          <h1>
            <span>Friend</span>sify
          </h1>
          <div className="landing-text text-align-left">
            <h4>
              <strong>Follow</strong> People around the globe
            </h4>
            <h4>
              <strong>Connect</strong> with your friends
            </h4>
            <h4>
              <strong>share</strong>what you are thinking
            </h4>
          </div>
          <div className="landing-btn">
            <button className="btn btn-left">
              <Link to="/signin" className="Link">
                Join Now
              </Link>
            </button>
            <Link className="Link" to="/login">
              Already have an account?
            </Link>
          </div>
        </article>

        <img src={img} alt="landing" className="landing-img" />
      </section>
    </main>
  );
}
