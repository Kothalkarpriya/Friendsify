import "../../assests/styles/footer.css";
import {
  AiOutlineGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <p>
        <span>Friendsify</span> is Created to connect with family and friends
      </p>
      <h3>Connect With Me:</h3>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/priyakothalkar/" alt="linkedin">
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/PriyaKothalkar" alt="twitter">
            <AiFillTwitterCircle />
          </a>
        </li>
        <li>
          <a href="https://github.com/Kothalkarpriya" alt="github">
            <AiOutlineGithub />
          </a>
        </li>
      </ul>
    </footer>
  );
}
