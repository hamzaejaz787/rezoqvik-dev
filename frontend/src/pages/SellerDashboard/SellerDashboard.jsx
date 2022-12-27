import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import userOne from "../../assets/18.jpg";
import programming from "../../assets/code-glasses.jpeg";
import DashboardForm from "../../components/DashboardForm/DashboardForm";
import "./seller-dashboard.css";

const SellerDashboard = () => {
  const navigate = useNavigate();
  const { seller } = useSelector((state) => state.auth);

  const { proImg, firstName, lastName, email } = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {
    if (!seller) navigate("/login");
  }, [seller, navigate]);
  return (
    <>
      <section className="seller__dashboard">
        <DashboardForm
          userBackground={programming}
          userImage={proImg ? proImg : userOne}
          userName={`${firstName} ${lastName}`}
          userTitle={email}
          userLocation="Islamabad, PK"
        />
      </section>
    </>
  );
};

export default SellerDashboard;
