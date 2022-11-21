import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Seller from "../../components/Seller/Seller";
import "./sellers.css";

const sellersData = [];

const Sellers = () => {
  const [seller, setSeller] = useState({
    proImg: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("http://localhost:8080/api/sale_users");
      const data = await response.json();

      console.log(response);
      setSeller(data);
    };
    fetchdata();
  }, []);

  return (
    <>
      <section className="sellers__container">
        <h3 className="sellers__container-title">Top Rated Profiles</h3>

        {/* <div className="sellers__container-cards">
          {sellersData.map((item, index) => (
            <Seller
              sellerImage={item.sellerImage}
              sellerName={item.sellerName}
              sellerTitle={item.sellerTitle}
              key={item.title + index}
            />
          ))}
        </div> */}

        <div className="seller__card">
          <img src={seller.proImg} alt="user pic" />
          <h4 className="seller__card_user-name">{seller.firstName}</h4>
          <small className="seller__card_user-title">{seller.email}</small>
          <Link to="/user" className="seller__card_user-link btn">
            Hire now
          </Link>
        </div>
      </section>
    </>
  );
};

export default Sellers;
