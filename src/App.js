import "./App.css";
import RoutesPath from "./route/RoutesPath";
import {
  Navbar,
  Footer,
  RightSideBar,
  LeftSideBar,
} from "./component/component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-container">
        <LeftSideBar />
        <RoutesPath />
        <RightSideBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
