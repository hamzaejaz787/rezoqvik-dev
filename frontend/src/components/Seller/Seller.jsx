import React from "react";
import { Link } from "react-router-dom";
import "./seller.css";

const Seller = ({ sellerImage, sellerName, sellerTitle }) => {
  return (
    <>
      <div className="seller__card">
        <img src={sellerImage} alt="userimg" />
        <h4 className="seller__card_user-name">{sellerName}</h4>
        <small className="seller__card_user-title">{sellerTitle}</small>
        <Link to="/user" className="seller__card_user-link btn">
          Hire now
        </Link>
      </div>
    </>
  );
};

export default Seller;
