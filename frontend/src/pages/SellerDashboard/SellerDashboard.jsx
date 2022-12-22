import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import userOne from "../../assets/18.jpg";
import programming from "../../assets/code-glasses.jpeg";
import DashboardForm from "../../components/DashboardForm/DashboardForm";
import "./seller-dashboard.css";

const sellerInfo = [
  {
    userBackground: programming,
    userImage: userOne,
    userName: "Neil Sims",
    userTitle: "Frontend Developer",
    userLocation: "Karachi, Pakistan",
  },
];

const SellerDashboard = () => {
  const navigate = useNavigate();
  const { seller } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!seller) navigate("/login");
  }, [seller, navigate]);
  return (
    <>
      <section className="seller__dashboard">
        {sellerInfo.map((item, index) => (
          <DashboardForm
            userBackground={item.userBackground}
            userImage={item.userImage}
            userName={item.userName}
            userTitle={item.userTitle}
            userLocation={item.userLocation}
            key={item.userTitle + index}
          />
        ))}
      </section>
    </>
  );
};

export default SellerDashboard;
