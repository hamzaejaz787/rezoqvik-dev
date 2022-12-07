import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Seller from "../../components/Seller/Seller";
import "./sellers.css";

const fetchUsers = async () => {
  const { data } = await axios.get("http://localhost:8080/api/sale_users");
  return data;
};

const Sellers = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  if (!isSuccess) return [];

  return (
    <>
      <section className="sellers__container">
        <h3 className="sellers__container-title">Top Rated Profiles</h3>

        <div className="sellers__container-cards">
          {data.slice(0, 15).map((user) => (
            <Seller
              sellerImage={user.proImg}
              sellerName={user.firstName}
              sellerTitle={user.email}
              key={user._id}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Sellers;
