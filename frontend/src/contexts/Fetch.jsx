import axios from "axios";

const Fetch = async () => {
  const { data } = await axios.get("http://localhost:8080/api/sellers/seller");
  return data;
};

export default Fetch;
