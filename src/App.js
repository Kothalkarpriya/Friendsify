import "./App.css";
import RoutesPath from "./route/RoutesPath";
import { Navbar, Footer } from "./component/component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RoutesPath />
      <Footer />
    </div>
  );
}

export default App;
