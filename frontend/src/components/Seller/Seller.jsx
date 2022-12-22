import { Link } from "react-router-dom";
import user from "../../assets/user-placeholder.png";
import "./seller.css";

const Seller = ({ sellerImage, sellerName, sellerTitle }) => {
  return (
    <>
      <div className="seller__card">
        <img src={sellerImage ? sellerImage : user} alt="userimg" />
        <h4 className="seller__card_user-name">{sellerName}</h4>
        <small className="seller__card_user-title">{sellerTitle}</small>
        <Link to="/signupbuyer" className="seller__card_user-link btn">
          Hire now
        </Link>
      </div>
    </>
  );
};

export default Seller;
