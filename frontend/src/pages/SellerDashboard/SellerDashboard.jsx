import userOne from "../../assets/85.jpg";
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
