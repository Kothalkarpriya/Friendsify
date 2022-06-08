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
import { SinglePost, EditPost } from "../component/component";

export default function RoutesPath() {
  return (
    <Routes>
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
      <Route
        exact
        path="/posts/:postId"
        element={
          <RequireAuth>
            <SinglePost />
          </RequireAuth>
        }
      />
      <Route
        path="/editPost/:postId"
        element={
          <RequireAuth>
            <EditPost />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}
