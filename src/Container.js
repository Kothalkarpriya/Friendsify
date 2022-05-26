import "./App.css";
import {
  Navbar,
  Footer,
  RightSideBar,
  LeftSideBar,
} from "./component/component";

function Container({ element }) {
  return (
    <div className="App">
      <Navbar />
      <div className="app-container">
        <LeftSideBar />
        {element}
        <RightSideBar />
      </div>
      <Footer />
    </div>
  );
}

export default Container;
