import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Seller from "../../components/Seller/Seller";
import Spinner from "../../components/Spinner/Spinner";
import { toast } from "react-toastify";
import "./sellers.css";

const fetchUsers = async () => {
  const { data } = await axios.get("http://localhost:8080/api/sellers/seller");
  return data;
};

const Sellers = () => {
  const { data, status } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  if (status === "loading") return <Spinner />;

  if (status === "error") return toast.error("Failed to get users");

  return (
    <>
      <section className="sellers__container">
        <h3 className="sellers__container-title">Top Rated Profiles</h3>

        <div className="sellers__container-cards">
          {data.slice(0, 6).map((user) => (
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
