import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SignupSeller from "./components/SignupSeller/SignupSeller";
import SignupBuyer from "./components/SignupBuyer/SignupBuyer";

import {
  Home,
  AboutUs,
  Support,
  User,
  Signup,
  Login,
  ForgotPassword,
  UserSettings,
  SellerDashboard,
  BuyerDashboard,
} from "./pages/export";
import "./App.css";

function App() {
  //const user = localStorage.getItem("token");

  return (
    <>
      <Navbar />
      <Routes>
        {/* {user && <Route path="/" element={<Home />} />} */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/support" element={<Support />} />
        <Route path="/user" element={<User />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupseller" element={<SignupSeller />} />
        <Route path="/signupbuyer" element={<SignupBuyer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/usersettings" element={<UserSettings />} />
        <Route path="/buyerdashboard" element={<BuyerDashboard />} />
        <Route path="/sellerdashboard" element={<SellerDashboard />} />
      </Routes>
    </>
  );
}

export default App;
