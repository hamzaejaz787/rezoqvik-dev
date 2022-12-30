import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import userOne from "../../assets/18.jpg";
import programming from "../../assets/code-glasses.jpeg";
import DashboardForm from "../../components/DashboardForm/DashboardForm";
import "./seller-dashboard.css";

const SellerDashboard = () => {
  const [userData, setUserData] = useState("");

  const navigate = useNavigate();
  const { seller } = useSelector((state) => state.auth);

  if (!seller) navigate("/login");

  useEffect(() => {
    if (seller) {
      const { proImg, firstName, lastName, email } = JSON.parse(
        localStorage.getItem("user")
      );
      setUserData({ proImg, firstName, lastName, email });
    }
  }, [seller, navigate]);
  return (
    <>
      <section className="seller__dashboard">
        <DashboardForm
          userBackground={programming}
          userImage={userData.proImg ? userData.proImg : userOne}
          userName={`${userData.firstName} ${userData.lastName}`}
          userTitle={userData.email}
          userLocation="Islamabad, PK"
        />
      </section>
    </>
  );
};

export default SellerDashboard;
