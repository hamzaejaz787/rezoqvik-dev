import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: user } = await axios.post(
        "http://localhost:8080/api/users/login",
        data
      );
      localStorage.setItem("token", user.token);
      console.log(localStorage.token);
      navigate("/buyerdashboard");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <h3>Welcome Back</h3>
        {/* {error && alert(error)} */}
        <form className="login__container-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={data.email}
            placeholder="Email Address"
            required
          />

          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={data.password}
            placeholder="Password"
            required
          />
          {error && <div>{error}</div>}

          <button className="btn" type="submit">
            Login
          </button>
        </form>

        <div className="login__container-forgot">
          <Link to="/forgotpassword">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
