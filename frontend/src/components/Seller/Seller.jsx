import { Link } from "react-router-dom";
import userImg from "../../assets/user-placeholder.png";
import { useSelector } from "react-redux";
import "./seller.css";

const Seller = ({ sellerImage, sellerName, sellerTitle, sellerId }) => {
  const { user, seller } = useSelector((state) => state.auth);

  return (
    <>
      <div className="seller__card">
        <img src={sellerImage ? sellerImage : userImg} alt="userimg" />
        <h4 className="seller__card_user-name">{sellerName}</h4>
        <small className="seller__card_user-title">{sellerTitle}</small>

        {user || seller ? (
          <>
            <Link
              to={`/profile/${sellerId}`}
              className="seller__card_user-link btn"
            >
              Hire now
            </Link>
          </>
        ) : (
          <>
            <Link to="/signupbuyer" className="seller__card_user-link btn">
              Hire now
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Seller;
