import "./App.css";
import RoutesPath from "./route/RoutesPath";
import { useLocation } from "react-router-dom";
import Container from "./Container";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname !== "/" && pathname !== "/login" && pathname !== "/signin" ? (
        <Container element={<RoutesPath />} />
      ) : (
        <RoutesPath />
      )}
    </div>
  );
}

export default App;
