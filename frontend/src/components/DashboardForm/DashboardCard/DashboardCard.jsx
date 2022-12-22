import { AiOutlineUserAdd } from "react-icons/ai";
import "./dashboard-card.css";

const DashboardCard = ({
  userBackground,
  userImage,
  userName,
  userTitle,
  userLocation,
}) => {
  return (
    <>
      <div className="dashboard__aside_card">
        <img
          src={userBackground}
          alt={`${userName} profile background`}
          className="card-background"
          loading="lazy"
        />

        <img
          src={userImage}
          alt={`${userName} profile pic`}
          className="card-image"
          loading="lazy"
        />

        <div className="card-wrapper">
          <h4 className="card-username">{userName}</h4>
          <h5 className="card-title">{userTitle}</h5>
          <small className="card-location">{userLocation}</small>

          <div className="dashboard__aside_card-btns">
            <button className="card-btn connect-btn">
              {" "}
              <AiOutlineUserAdd className="connect-btn-icon" /> Connect
            </button>
            <button className="card-btn message-btn">Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
