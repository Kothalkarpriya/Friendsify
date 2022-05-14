import { Routes, Route } from "react-router-dom";
import {
  Home,
  Profile,
  Notifications,
  LandingPage,
  Explore,
  BookMarks,
  Login,
  SignIn,
} from "../pages/pages";

export default function RoutesPath() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/notification" element={<Notifications />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/bookmarks" element={<BookMarks />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}
