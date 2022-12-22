import { useQuery } from "@tanstack/react-query";
import Seller from "../../components/Seller/Seller";
import Spinner from "../../components/Spinner/Spinner";
import Fetch from "../../contexts/Fetch";
import { toast } from "react-toastify";
import "./sellers.css";

const Sellers = () => {
  const { data, status } = useQuery({
    queryKey: ["users"],
    queryFn: Fetch,
  });

  if (status === "loading") return <Spinner />;

  if (status === "error") return toast.error("Failed to load content");

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
