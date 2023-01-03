import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import buyerOne from "../../assets/18.jpg";
import programming from "../../assets/web-design.jpeg";
import DashboardForm from "../../components/DashboardForm/DashboardForm";
import "./buyer-dashboard.css";

const BuyerDashboard = () => {
  const [userData, setUserData] = useState("");

  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      const { firstName, lastName, email } = JSON.parse(
        localStorage.getItem("user")
      );
      setUserData({ firstName, lastName, email });
    } else {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <section className="buyer__dashboard">
        <DashboardForm
          userBackground={programming}
          userImage={userData.proImg ? userData.proImg : buyerOne}
          userName={`${userData.firstName} ${userData.lastName}`}
          userTitle={userData.email}
          userLocation="Karachi, PK"
        />
      </section>
    </>
  );
};

export default BuyerDashboard;
