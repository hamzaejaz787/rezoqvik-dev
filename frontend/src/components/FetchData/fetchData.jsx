import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Seller from "../Seller/Seller";

const fetchUsers = async () => {
  const { data } = await axios.get("http://localhost:8080/api/sellers");
  return data;
};

const fetchData = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isSuccess } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  if (!isSuccess) return [];

  return (
    <>
      <div className="fetch__data">
        {data.map((user) => (
          <Seller
            sellerImage={user.proImg}
            sellerName={user.firstName}
            sellerTitle={user.email}
            key={user._id}
          />
        ))}
      </div>
    </>
  );
};

export default fetchData;
