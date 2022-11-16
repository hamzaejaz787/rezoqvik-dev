import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./seller.css";

const Seller = () => {
  //const [seller, setSeller] = useState("");
  const [seller, setSeller] = useState({
    proImg: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/api/seller_user/get");
      setSeller(data);
    };
    fetchdata();
  }, []);
  return (
    <>
      <div className="seller__card">
        <img src={seller.proImg} alt="user pic" />
        <h4 className="seller__card_user-name">{seller.firstName}</h4>
        <small className="seller__card_user-title">{seller.email}</small>
        <Link to="/user" className="seller__card_user-link btn">
          Hire now
        </Link>
      </div>
    </>
  );
};

export default Seller;
