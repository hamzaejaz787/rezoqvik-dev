import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import buyerOne from "../../assets/18.jpg";
import programming from "../../assets/web-design.jpeg";
import DashboardForm from "../../components/DashboardForm/DashboardForm";
import "./buyer-dashboard.css";

const BuyerDashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  const { proImg, firstName, lastName, email } = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <>
      <section className="buyer__dashboard">
        <DashboardForm
          userBackground={programming}
          userImage={proImg ? proImg : buyerOne}
          userName={`${firstName} ${lastName}`}
          userTitle={email}
          userLocation="Karachi, PK"
        />
      </section>
    </>
  );
};

export default BuyerDashboard;
