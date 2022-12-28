import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SignupSeller from "./pages/SignupSeller/SignupSeller";
import SignupBuyer from "./pages/SignupBuyer/SignupBuyer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Home,
  AboutUs,
  Support,
  Signup,
  Login,
  ForgotPassword,
  SellerDashboard,
  BuyerDashboard,
} from "./pages/export";
import Profile from "./containers/Profile/User";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupseller" element={<SignupSeller />} />
          <Route path="/signupbuyer" element={<SignupBuyer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/buyerdashboard" element={<BuyerDashboard />} />
          <Route path="/sellerdashboard" element={<SellerDashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
