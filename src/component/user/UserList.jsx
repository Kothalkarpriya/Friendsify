import "../../assests/styles/userlist.css";

export default function UserList() {
  return (
    <div className="userlist-container">
      <div className="first">
        <img
          src="https://picsum.photos/200"
          alt="user profile"
          className="avatar-image round-image"
        />
        <p className="user-name">UserName</p>
      </div>

      <button className="btn btn-left">Follow</button>
    </div>
  );
}
