import { Routes, Route } from "react-router-dom";
import {
  Home,
  Profile,
  LandingPage,
  Explore,
  BookMarks,
  Login,
  SignIn,
  RequireAuth,
} from "../pages/pages";
import Mockman from "mockman-js";

export default function RoutesPath() {
  return (
    <Routes>
      <Route path="/mockman" element={<Mockman />} />
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/home"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route
        path="/profile"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
      <Route
        path="/explore"
        element={
          <RequireAuth>
            <Explore />
          </RequireAuth>
        }
      />
      <Route
        path="/bookmarks"
        element={
          <RequireAuth>
            <BookMarks />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}
