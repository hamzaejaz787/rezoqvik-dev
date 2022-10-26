import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SignupSeller from "./components/SignupSeller/SignupSeller";
import { AuthProvider } from "./contexts/AuthContext";

import {
  Home,
  AboutUs,
  Support,
  User,
  Signup,
  Login,
  ForgotPassword,
  UserSettings,
} from "./pages/export";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/user" element={<User />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupseller" element={<SignupSeller />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/usersettings" element={<UserSettings />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
