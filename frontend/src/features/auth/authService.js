import axios from "axios";

const API_URL = "http://localhost:8080/api/users";
const SELLER_API_URL = "http://localhost:8080/api/sellers";

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const registerSeller = async (sellerData) => {
  const response = await axios.post(SELLER_API_URL, sellerData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(API_URL + "/login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  registerSeller,
  login,
  logout,
};

export default authService;
