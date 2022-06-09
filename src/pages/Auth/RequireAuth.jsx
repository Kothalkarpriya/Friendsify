import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RequireAuth({ children }) {
  const location = useLocation();
  const { token } = useSelector((state) => state.auth);

  return token || localStorage.getItem("token") ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
