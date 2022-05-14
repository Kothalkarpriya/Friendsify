import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/context";

export default function RequireAuth({ children }) {
  const location = useLocation();
  const {isUserLoggedIn} = useAuth();

  return isUserLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
