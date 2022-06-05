import "./App.css";
import RoutesPath from "./route/RoutesPath";
import { useLocation } from "react-router-dom";
import Container from "./Container";
// import {Provider} from "react-redux";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {/* <Provider > */}
      {pathname !== "/" && pathname !== "/login" && pathname !== "/signin" ? (
        <Container element={<RoutesPath />} />
      ) : (
        <RoutesPath />
      )}
      {/* </Provider> */}
    </div>
  );
}

export default App;
