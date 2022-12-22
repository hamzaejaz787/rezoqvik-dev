import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import buyerOne from "../../assets/18.jpg";
import programming from "../../assets/web-design.jpeg";
import DashboardForm from "../../components/DashboardForm/DashboardForm";
import "./buyer-dashboard.css";

const buyerInfo = [
  {
    userBackground: programming,
    userImage: buyerOne,
    userName: "John Doe",
    userTitle: "UI Designer",
    userLocation: "Lahore, Pakistan",
  },
];

const BuyerDashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <>
      <section className="buyer__dashboard">
        {buyerInfo.map((item, index) => (
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

export default BuyerDashboard;
